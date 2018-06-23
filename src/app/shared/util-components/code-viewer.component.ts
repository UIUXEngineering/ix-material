import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../services/highlight-js/highlight.service';

@Component({
  // tslint:disable
  selector: 'code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CodeViewerComponent implements AfterViewInit {
  @Input('codeType') codeType: string;
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
