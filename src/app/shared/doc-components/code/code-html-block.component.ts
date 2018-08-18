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
import { guid } from '@uiux/cdk/guid';
import { HighlightService } from '../../services/highlight-js/highlight.service';

@Component({
  // tslint:disable-next-line
  selector: 'code-html-block',
  template: `<pre><code class="html" id="{{id}}">{{code}}</code></pre>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeHtmlBlockComponent implements AfterViewInit, OnChanges {
  @Input('code') code: string;
  id = guid();

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  ngAfterViewInit(): void {
    document.getElementById(this.id).innerText = this.code;
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
