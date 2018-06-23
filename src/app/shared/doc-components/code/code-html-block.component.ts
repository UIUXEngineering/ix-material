import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../services/highlight-js/highlight.service';

@Component({
  // tslint:disable-next-line
  selector: 'code-html-block',
  template: `<pre><code class="html">{{code}}</code></pre>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeHtmlBlockComponent implements AfterViewInit, OnChanges {
  @Input('code') code: string;

  constructor(
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  ngAfterViewInit(): void {
    this._hs.highlight(this._elementRef, this._cd);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable:no-string-literal
    if (changes['snippet'] && changes['snippet'].currentValue) {
      // this.highlight();
    }
    // tslint:enable:no-string-literal
  }
}
