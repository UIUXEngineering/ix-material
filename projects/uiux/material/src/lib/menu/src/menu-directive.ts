/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {FocusKeyManager, FocusOrigin} from '@angular/cdk/a11y';
import {Direction} from '@angular/cdk/bidi';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ESCAPE, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW} from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Output,
  TemplateRef,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {merge, Observable, Subject, Subscription} from 'rxjs';
import {startWith, switchMap, take} from 'rxjs/operators';
import {IxMenuAnimations} from './menu-animations';
import {IxMenuContent} from './menu-content';
import {throwIxMenuInvalidPositionX, throwIxMenuInvalidPositionY} from './menu-errors';
import {IxMenuItem} from './menu-item';
import {MAT_MENU_PANEL, IxMenuPanel} from './menu-panel';
import {MenuPositionX, MenuPositionY} from './menu-positions';
import {IxMenuModel} from './_model/menu-model.service'; // TODO(uiux): model edit

/** Default `ix-menu` options that can be overridden. */
export interface IxMenuDefaultOptions {
  /** The x-axis position of the menu. */
  xPosition: MenuPositionX;

  /** The y-axis position of the menu. */
  yPosition: MenuPositionY;

  /** Whether the menu should overlap the menu trigger. */
  overlapTrigger: boolean;

  /** Class to be applied to the menu's backdrop. */
  backdropClass: string;

  /** Whether the menu has a backdrop. */
  hasBackdrop?: boolean;
}

/** Injection token to be used to override the default options for `ix-menu`. */
export const MAT_MENU_DEFAULT_OPTIONS =
    new InjectionToken<IxMenuDefaultOptions>('ix-menu-default-options', {
      providedIn: 'root',
      factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
    });

/** @docs-private */
export function MAT_MENU_DEFAULT_OPTIONS_FACTORY(): IxMenuDefaultOptions {
  return {
    overlapTrigger: true,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop',
  };
}
/**
 * Start elevation for the menu panel.
 * @docs-private
 */
const MAT_MENU_BASE_ELEVATION = 2;


@Component({
  selector: 'ix-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'IxMenu',
  animations: [
    IxMenuAnimations.transformMenu,
    IxMenuAnimations.fadeInItems
  ],
  providers: [
    {provide: MAT_MENU_PANEL, useExisting: IxMenu}
  ]
})
export class IxMenu implements AfterContentInit, IxMenuPanel<IxMenuItem>, OnDestroy {
  private _keyManager: FocusKeyManager<IxMenuItem>;
  private _xPosition: MenuPositionX = this._defaultOptions.xPosition;
  private _yPosition: MenuPositionY = this._defaultOptions.yPosition;
  private _previousElevation: string;

  // TODO(uiux): Model edits
  private _spDisableClose = false;
  private _IxMenuModelID: string;
  private _IxMenuModelSubscription = Subscription.EMPTY;

  /** Menu items inside the current menu. */
  private _items: IxMenuItem[] = [];

  /** Emits whenever the amount of menu items changes. */
  private _itemChanges = new Subject<IxMenuItem[]>();

  /** Subscription to tab events on the menu panel */
  private _tabSubscription = Subscription.EMPTY;

  /** Config object to be passed into the menu's ngClass */
  _classList: {[key: string]: boolean} = {};

  /** Current state of the panel animation. */
  _panelAnimationState: 'void' | 'enter' = 'void';

  /** Emits whenever an animation on the menu completes. */
  _animationDone = new Subject<AnimationEvent>();

  /** Whether the menu is animating. */
  _isAnimating: boolean;

  /** Parent menu of the current menu panel. */
  parentMenu: IxMenuPanel | undefined;

  /** Layout direction of the menu. */
  direction: Direction;

  /** Class to be added to the backdrop element. */
  @Input() backdropClass: string = this._defaultOptions.backdropClass;

  /** Position of the menu in the X axis. */
  @Input()
  get xPosition(): MenuPositionX { return this._xPosition; }
  set xPosition(value: MenuPositionX) {
    if (value !== 'before' && value !== 'after') {
      throwIxMenuInvalidPositionX();
    }
    this._xPosition = value;
  }

  /** Position of the menu in the Y axis. */
  @Input()
  get yPosition(): MenuPositionY { return this._yPosition; }
  set yPosition(value: MenuPositionY) {
    if (value !== 'above' && value !== 'below') {
      throwIxMenuInvalidPositionY();
    }
    this._yPosition = value;
  }

  // TODO(uiux): model edit
  @Input()
  set spDisableClose(val: boolean) {
    this._spDisableClose = val !== undefined ? val : true;
  }

  // TODO(uiux): model edit
  @Input()
  set IxMenuModelID(val: string) {
    this._IxMenuModelID = val;
  }

  /** @docs-private */
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  /**
   * List of the items inside of a menu.
   * @deprecated
   * @deletion-target 7.0.0
   */
  @ContentChildren(IxMenuItem) items: QueryList<IxMenuItem>;

  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  @ContentChild(IxMenuContent) lazyContent: IxMenuContent;

  /** Whether the menu should overlap its trigger. */
  @Input()
  get overlapTrigger(): boolean { return this._overlapTrigger; }
  set overlapTrigger(value: boolean) {
    this._overlapTrigger = coerceBooleanProperty(value);
  }
  private _overlapTrigger: boolean = this._defaultOptions.overlapTrigger;

  /** Whether the menu has a backdrop. */
  @Input()
  get hasBackdrop(): boolean | undefined { return this._hasBackdrop; }
  set hasBackdrop(value: boolean | undefined) {
    this._hasBackdrop = coerceBooleanProperty(value);
  }
  private _hasBackdrop: boolean | undefined = this._defaultOptions.hasBackdrop;

  /**
   * This method takes classes set on the host ix-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  @Input('class')
  set panelClass(classes: string) {
    if (classes && classes.length) {
      this._classList = classes.split(' ').reduce((obj: any, className: string) => {
        obj[className] = true;
        return obj;
      }, {});

      this._elementRef.nativeElement.className = '';
    }
  }

  /**
   * This method takes classes set on the host ix-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @deletion-target 7.0.0
   */
  @Input()
  get classList(): string { return this.panelClass; }
  set classList(classes: string) { this.panelClass = classes; }

  /** Event emitted when the menu is closed. */
  @Output() readonly closed: EventEmitter<void | 'click' | 'keydown' | 'tab'> =
      new EventEmitter<void | 'click' | 'keydown' | 'tab'>();

  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @deletion-target 7.0.0
   */
  @Output() close = this.closed;

  constructor(
    private _elementRef: ElementRef,
    private _ngZone: NgZone,
    private _IxMenuModel: IxMenuModel, // TODO(uiux): model edit
    @Inject(MAT_MENU_DEFAULT_OPTIONS) private _defaultOptions: IxMenuDefaultOptions) { }

  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager<IxMenuItem>(this._items).withWrap().withTypeAhead();

    // TODO(uiux): model edit
    this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.spTabHandler());
    if (this._IxMenuModelID) {
      this._IxMenuModelSubscription = this._IxMenuModel
        .getModelByID(this._IxMenuModelID)
        .subscribe((_event: string) => {
          if (_event === 'close') {
            this.closed.emit('click');
          }
        });
    }
  }

  ngOnDestroy() {
    this._tabSubscription.unsubscribe();
    this.closed.complete();

    // TODO(uiux): model edit
    this._IxMenuModelSubscription.unsubscribe();
  }

  /** Stream that emits whenever the hovered menu item changes. */
  _hovered(): Observable<IxMenuItem> {
    return this._itemChanges.pipe(
      startWith(this._items),
      switchMap(items => merge(...items.map(item => item._hovered)))
    );
  }

  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event: KeyboardEvent) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case ESCAPE:
        this.closed.emit('keydown');
        event.stopPropagation();
      break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === 'ltr') {
          this.closed.emit('keydown');
        }
      break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === 'rtl') {
          this.closed.emit('keydown');
        }
      break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          this._keyManager.setFocusOrigin('keyboard');
        }

        this._keyManager.onKeydown(event);
    }
  }

  // TODO(uiux): model edit
  /**
   * Prevent closing menu if _spDisableClose
   * flag is set
   */
  spCloseHandler() {
    if (!this._spDisableClose) {
      this.closed.emit('click');
    }
  }

  // TODO(uiux): model edit
  /**
   * Prevent closing menu if _spDisableClose
   * flag is set
   */
  spTabHandler() {
    if (!this._spDisableClose) {
      this.close.emit('tab');
    }
  }

  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin: FocusOrigin = 'program'): void {
    // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
    if (this.lazyContent) {
      this._ngZone.onStable.asObservable()
        .pipe(take(1))
        .subscribe(() => this._keyManager.setFocusOrigin(origin).setFirstItemActive());
    } else {
      this._keyManager.setFocusOrigin(origin).setFirstItemActive();
    }
  }

  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }

  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */
  setElevation(depth: number): void {
    // The elevation starts at the base and increases by one for each level.
    const newElevation = `mat-elevation-z${MAT_MENU_BASE_ELEVATION + depth}`;
    const customElevation = Object.keys(this._classList).find(c => c.startsWith('mat-elevation-z'));

    if (!customElevation || customElevation === this._previousElevation) {
      if (this._previousElevation) {
        this._classList[this._previousElevation] = false;
      }

      this._classList[newElevation] = true;
      this._previousElevation = newElevation;
    }
  }

  /**
   * Registers a menu item with the menu.
   * @docs-private
   */
  addItem(item: IxMenuItem) {
    // We register the items through this method, rather than picking them up through
    // `ContentChildren`, because we need the items to be picked up by their closest
    // `ix-menu` ancestor. If we used `@ContentChildren(IxMenuItem, {descendants: true})`,
    // all descendant items will bleed into the top-level menu in the case where the consumer
    // has `ix-menu` instances nested inside each other.
    if (this._items.indexOf(item) === -1) {
      this._items.push(item);
      this._itemChanges.next(this._items);
    }
  }

  /**
   * Removes an item from the menu.
   * @docs-private
   */
  removeItem(item: IxMenuItem) {
    const index = this._items.indexOf(item);

    if (this._items.indexOf(item) > -1) {
      this._items.splice(index, 1);
      this._itemChanges.next(this._items);
    }
  }

  /** Starts the enter animation. */
  _startAnimation() {
    // @deletion-target 7.0.0 Combine with _resetAnimation.
    this._panelAnimationState = 'enter';
  }

  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    // @deletion-target 7.0.0 Combine with _startAnimation.
    this._panelAnimationState = 'void';
  }

  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event: AnimationEvent) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }
}
