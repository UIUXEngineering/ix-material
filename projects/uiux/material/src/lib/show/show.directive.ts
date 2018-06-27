/**
 * @license
 * Copyright UIUX Engineering Corporation All Rights Reserved.
 */
import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { hasValue } from '@uiux/cdk/value';

// tslint:disable-next-line
@Directive({
  selector: '[spShow]',
})
export class SpShowDirective implements OnChanges {
  private _hasShown = false;
  @Input('spShow') spShow: boolean;

  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this._renderer.addClass(this._el.nativeElement, 'sp-hide-initial');
    // this._renderer.addClass(this._el.nativeElement, 'sp-hide');
  }

  ngOnChanges(change: SimpleChanges): void {
    // tslint:disable:no-string-literal
    if (hasValue(change['spShow'])) {
      if (change['spShow'].currentValue) {
        this.show();
      } else {
        this.hide();
      }
    }
    // tslint:enable:no-string-literal
  }

  show(): void {
    if (!this._hasShown) {
      this._renderer.addClass(this._el.nativeElement, 'sp-show');
      this._renderer.removeClass(this._el.nativeElement, 'sp-hide-initial');
      this._hasShown = true;
    } else {
      this._renderer.removeClass(this._el.nativeElement, 'sp-hide');
    }
  }

  hide(): void {
    if (this._hasShown) {
      this._renderer.addClass(this._el.nativeElement, 'sp-hide');
    }
  }
}
