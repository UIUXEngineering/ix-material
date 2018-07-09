import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../services/highlight-js/highlight.service';

@Component({
  // tslint:disable
  selector: 'code-scss-block',
  template: `<pre><code class="scss">{{code}}</code></pre>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeScssBlockComponent implements AfterViewInit, OnChanges {
  @Input('code') code: string;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  ngAfterViewInit(): void {
    this._hs.highlight(this._elementRef, this._cd);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable:no-string-literal
    if (changes['code'] && changes['code'].currentValue) {
      const code = this._elementRef.nativeElement.querySelectorAll('code') as HTMLElement[];

      this._renderer.setProperty(code[0], 'innerHTML', changes['code'].currentValue);

      this._hs.highlight(this._elementRef, this._cd);
    }
    // tslint:enable:no-string-literal
  }
}
