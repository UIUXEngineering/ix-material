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
  // tslint:disable
  selector: 'code-import-inline',
  template: `<span class="code-import-inline"><pre><code class="typescript">{{code}}</code></pre></span>`,
  styleUrls: ['./code-import-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeImportInlineComponent implements AfterViewInit, OnChanges {
  @Input('_import') public _import: string;
  @Input('_from') public _from: string;
  @Input('api') public api: string;

  code: string;

  constructor(
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  ngAfterViewInit(): void {
    if (this._from && this._import) {
      this.code = `import { ${this._import} } from '${this._from}'`;
    } else {
      this.code = this.api;
    }

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
