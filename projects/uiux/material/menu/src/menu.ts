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
import {
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
  UP_ARROW,
  HOME,
  END,
  hasModifierKey,
} from '@angular/cdk/keycodes';
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
  OnInit,
} from '@angular/core';
import {merge, Observable, Subject, Subscription} from 'rxjs';
import {startWith, switchMap, take} from 'rxjs/operators';
import {ixMenuAnimations} from './menu-animations';
import {IxMenuContent} from './menu-content';
import {MenuPositionX, MenuPositionY} from './menu-positions';
import {throwIxMenuInvalidPositionX, throwIxMenuInvalidPositionY} from './menu-errors';
import {IxMenuItem} from './menu-item';
import {MAT_MENU_PANEL, IxMenuPanel} from './menu-panel';
import {AnimationEvent} from '@angular/animations';
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
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop',
  };
}
/**
 * Start elevation for the menu panel.
 * @docs-private
 */
const MAT_MENU_BASE_ELEVATION = 4;

/** Base class with all of the `IxMenu` functionality. */
// tslint:disable-next-line:class-name
export class _IxMenuBase implements AfterContentInit, IxMenuPanel<IxMenuItem>, OnInit,
  OnDestroy {
  private _keyManager: FocusKeyManager<IxMenuItem>;
  private _xPosition: MenuPositionX = this._defaultOptions.xPosition;
  private _yPosition: MenuPositionY = this._defaultOptions.yPosition;
  private _previousElevation: string;

  // TODO(uiux): Model edits
  private _ixDisableClose = false;
  private _ixMenuModelID: string;
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
    this.setPositionClasses();
  }

  /** Position of the menu in the Y axis. */
  @Input()
  get yPosition(): MenuPositionY { return this._yPosition; }
  set yPosition(value: MenuPositionY) {
    if (value !== 'above' && value !== 'below') {
      throwIxMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }

  // TODO(uiux): model edit
  @Input()
  set ixMenuModelID( val: string) {
    this._ixMenuModelID = val;
  }

  /** @docs-private */
  @ViewChild(TemplateRef, {static: false}) templateRef: TemplateRef<any>;

  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  @ContentChildren(IxMenuItem) items: QueryList<IxMenuItem>;

  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  @ContentChild(IxMenuContent, {static: false}) lazyContent: IxMenuContent;

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
    const previousPanelClass = this._previousPanelClass;

    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach((className: string) => {
        this._classList[className] = false;
      });
    }

    this._previousPanelClass = classes;

    if (classes && classes.length) {
      classes.split(' ').forEach((className: string) => {
        this._classList[className] = true;
      });

      this._elementRef.nativeElement.className = '';
    }
  }
  private _previousPanelClass: string;

  /**
   * This method takes classes set on the host ix-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
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
   * @breaking-change 8.0.0
   */
  @Output() close = this.closed;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
    private _IxMenuModel: IxMenuModel, // TODO(uiux): model edit
    @Inject(MAT_MENU_DEFAULT_OPTIONS) private _defaultOptions: IxMenuDefaultOptions) { }

  ngOnInit() {
    this.setPositionClasses();
  }

  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager<IxMenuItem>(this._items).withWrap().withTypeAhead();
    this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));

    // TODO(uiux): model edit
    this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.ixTabHandler());
    if (this._ixMenuModelID) {
      this._IxMenuModelSubscription = this._IxMenuModel
        .getModelByID(this._ixMenuModelID)
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
    const manager = this._keyManager;

    switch (keyCode) {
      case ESCAPE:
        this.closed.emit('keydown');
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
      case HOME:
      case END:
        if (!hasModifierKey(event)) {
          keyCode === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
          event.preventDefault();
        }
      break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin('keyboard');
        }

        manager.onKeydown(event);
    }
  }

  // TODO(uiux): model edit
  /**
   * Prevent closing menu if _ixDisableClose
   * flag is set
   */
  ixCloseHandler() {
    if (!this._ixDisableClose) {
      this.closed.emit('click');
    }
  }

  // TODO(uiux): model edit
  /**
   * Prevent closing menu if _ixDisableClose
   * flag is set
   */
  ixTabHandler() {
    if (!this._ixDisableClose) {
      this.closed.emit('tab');
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

  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX: MenuPositionX = this.xPosition, posY: MenuPositionY = this.yPosition) {
    const classes = this._classList;
    classes['ix-menu-before'] = posX === 'before';
    classes['ix-menu-after'] = posX === 'after';
    classes['ix-menu-above'] = posY === 'above';
    classes['ix-menu-below'] = posY === 'below';
  }

  /** Starts the enter animation. */
  _startAnimation() {
    // @breaking-change 8.0.0 Combine with _resetAnimation.
    this._panelAnimationState = 'enter';
  }

  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    // @breaking-change 8.0.0 Combine with _startAnimation.
    this._panelAnimationState = 'void';
  }

  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event: AnimationEvent) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }

  _onAnimationStart(event: AnimationEvent) {
    this._isAnimating = true;

    // Scroll the content element to the top as soon as the animation starts. This is necessary,
    // because we move focus to the first item while it's still being animated, which can throw
    // the browser off when it determines the scroll position. Alternatively we can move focus
    // when the animation is done, however moving focus asynchronously will interrupt screen
    // readers which are in the process of reading out the menu already. We take the `element`
    // from the `event` since we can't use a `ViewChild` to access the pane.
    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
}

export class IxMenu extends _IxMenuBase {}

// Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
// extend `IxMenu`, however keeping a reference to it will cause the inlined template and styles
// to be retained as well. The MDC menu also has to provide itself as a `IxMenu` in order for
// queries and DI to work correctly, while still not referencing the actual menu class.
// Class responsibility is split up as follows:
// * _IxMenuBase - provides all the functionality without any of the Angular metadata.
// * IxMenu - keeps the same name symbol name as the current menu and
// is used as a provider for DI and query purposes.
// * _IxMenu - the actual menu component implementation with the Angular metadata that should
// be tree shaken away for MDC.

@Component({
  // moduleId: module.id,
  selector: 'ix-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'ixMenu',
  animations: [
    ixMenuAnimations.transformMenu,
    ixMenuAnimations.fadeInItems
  ],
  providers: [
    {provide: MAT_MENU_PANEL, useExisting: IxMenu},
    {provide: IxMenu, useExisting: _IxMenu}
  ]
})
// tslint:disable-next-line:class-name
export class _IxMenu extends IxMenu {

  constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone,
              _IxMenuModel: IxMenuModel, // TODO(uiux): model edit
      @Inject(MAT_MENU_DEFAULT_OPTIONS) defaultOptions: IxMenuDefaultOptions) {
    super(elementRef, ngZone, _IxMenuModel, defaultOptions);
  }
}