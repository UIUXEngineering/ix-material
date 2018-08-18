import { DOCUMENT } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CheckContentLoaded, Content, ContentLoadedService } from '@uiux/fn/dom';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'api-viewer',
  templateUrl: './api-viewer.component.html',
  styleUrls: ['./api-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiViewerComponent implements AfterViewChecked, OnDestroy {
  // private _contentLoaded = false;
  private _contentChecker: CheckContentLoaded;

  @Input('data') public data: IDataItem;
  @Input('containerCssClass') public containerCssClass = '.docs-api-viewer-cmp-content';

  @Output() contentLoaded = new EventEmitter<void>();

  get api() {
    let _api = '';
    const parts = this.data.route.split('/');

    if (this.data.route.indexOf('fn') > -1) {
      _api = `import { ${parts[3]} } from '@uiux/fn/${parts[2]}'`;
    }

    if (this.data.route.indexOf('material') > -1) {
      _api = `import { ${parts[2]} } from '@uiux/material'`;
    }

    return _api;
  }

  constructor(
    private _cd: ChangeDetectorRef,
    private _clService: ContentLoadedService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    /* noop */
  }

  ngAfterViewChecked(): void {
    this._checkNgContentLoaded();
  }

  ngOnDestroy(): void {
    if (this._contentChecker && this._contentChecker.destroy) {
      // this._contentChecker.destroy();
      // this._contentChecker = null;
    }
  }

  private _checkNgContentLoaded(): void {
    // singleton pattern
    if (!this._contentChecker) {
      this._contentChecker = ContentLoadedService.factory(this._document, this.containerCssClass);
    }

    // update selector if changed
    this._contentChecker.setContainerSelector(this.containerCssClass);

    this._contentChecker.checkedContentLoaded().subscribe((r: Content) => {
      if (r.isLoaded) {
        this.contentLoaded.next();
      }
    });
  }
}
