/**
 * @license
 * Copyright UIUX Engineering Corporation All Rights Reserved.
 */
import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { hasValue } from '@uiux/fn/common';

// tslint:disable-next-line
@Directive({
  selector: '[ixShow]',
})
export class IxShowDirective implements OnChanges {
  private _hasShown = false;
  @Input()
  ixShow: boolean;

  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this._renderer.addClass(this._el.nativeElement, 'ix-hide-initial');
    // this._renderer.addClass(this._el.nativeElement, 'ix-hide');
  }

  ngOnChanges(change: SimpleChanges): void {
    // tslint:disable:no-string-literal
    if (hasValue(change['ixShow'])) {
      if (change['ixShow'].currentValue) {
        this.show();
      } else {
        this.hide();
      }
    }
    // tslint:enable:no-string-literal
  }

  show(): void {
    if (!this._hasShown) {
      this._renderer.addClass(this._el.nativeElement, 'ix-show');
      this._renderer.removeClass(this._el.nativeElement, 'ix-hide-initial');
      this._hasShown = true;
    } else {
      this._renderer.removeClass(this._el.nativeElement, 'ix-hide');
    }
  }

  hide(): void {
    if (this._hasShown) {
      this._renderer.addClass(this._el.nativeElement, 'ix-hide');
    }
  }
}
