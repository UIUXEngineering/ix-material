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
  selector: 'code-import-block',
  template: `
    <pre><code class="typescript">{{_code}}</code></pre>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeImportBlockComponent implements AfterViewInit, OnChanges {
  @Input('_import') public _import: string;
  @Input('_from') public _from: string;
  @Input('code')
  set code(val: string) {
    if (val) {
      this._code = val;
    }
  }

  _code: string;

  constructor(
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _hs: HighlightService
  ) {}

  ngAfterViewInit(): void {
    if (this._from && this._import) {
      this._code = `import { ${this._import} } from '${this._from}'`;
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
