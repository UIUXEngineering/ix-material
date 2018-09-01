import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CheckContentLoaded, Content, ContentLoadedService } from '@uiux/services/dom';
import { hasValue } from '@uiux/fn/common';
import { MarkdownService } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { IDataItem } from '../../../../models/routes';
import { HighlightService } from '../../services/highlight-js/highlight.service';

@Component({
  selector: 'markdown-viewer',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class MarkdownViewerComponent implements AfterViewInit, OnDestroy {
  private _documentFetchSubscription: Subscription;
  private _contentChecker: CheckContentLoaded;
  private _data: IDataItem;
  private _containerCssClass = '.docs-markdown-viewer-cmp-content';
  // @HostBinding('class.docs-markdown-viewer-cmp-content') containerClass = true;
  @Input('file') file: string;
  @Input('data')
  set data(val: IDataItem) {
    if (hasValue(val)) {
      this._data = val;
      if (hasValue(val.file)) {
        this.file = val.file;
      }
    }
  }

  @Input('containerCssClass')
  set containerCssClass(val: string) {
    if (hasValue(val)) {
      this._containerCssClass = val;
    }
  }
  @Output() contentLoaded = new EventEmitter<void>();

  constructor(
    private _http: HttpClient,
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private markdownService: MarkdownService,
    private _hs: HighlightService,
    private _clService: ContentLoadedService,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngAfterViewInit(): void {
    this._fetchDocument(this.file);
  }

  /** Fetch a document by URL. */
  private _fetchDocument(url: string) {
    // Cancel previous pending request
    if (this._documentFetchSubscription) {
      this._documentFetchSubscription.unsubscribe();
    }

    this._documentFetchSubscription = this._http.get(url, { responseType: 'text' }).subscribe(
      (response) => {
        if (response) {
          // this.data = response;
          let markdown: any = this.markdownService.compile(response);
          markdown = markdown.split('language-').join('');
          this._elementRef.nativeElement.innerHTML = markdown;

          this._hs.highlight(this._elementRef, this._cd);

          this._checkNgContentLoaded();

          // this._cd.detectChanges();
          //
          // if (window && window['hljs']) {
          //   const block: any[] = this._elementRef.nativeElement.querySelectorAll('pre code');
          //
          //   if (hasValue(block)) {
          //     block.forEach(el => {
          //       window['hljs'].highlightBlock(el);
          //     });
          //   }
          // }
        } else {
          this._elementRef.nativeElement.innerText = `Failed to load document: ${url}. Error: ${response}`;
        }
      },
      (error) => {
        this._elementRef.nativeElement.innerText = `Failed to load document: ${url}. Error: ${error}`;
      }
    );
  }

  onError(event: any): void {
    console.log(event);
  }

  ngOnDestroy(): void {
    // this._contentChecker.destroy();
    // this._contentChecker = null;
  }

  private _checkNgContentLoaded(): void {
    // singleton pattern
    if (!this._contentChecker) {
      this._contentChecker = ContentLoadedService.factory(this._document, this._containerCssClass);
    }

    // update selector if changed
    this._contentChecker.setContainerSelector(this._containerCssClass);

    this._contentChecker.checkedContentLoaded().subscribe((r: Content) => {
      if (r.isLoaded) {
        this.contentLoaded.next();
      }
    });
  }
}
