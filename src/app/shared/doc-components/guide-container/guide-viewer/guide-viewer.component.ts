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
import { CheckContentLoaded, Content, ContentLoadedService } from '@uiux/services/dom';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'guide-viewer',
  templateUrl: './guide-viewer.component.html',
  styleUrls: ['./guide-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideViewerComponent implements AfterViewChecked, OnDestroy {
  private _contentChecker: CheckContentLoaded;
  private _containerCssClass = '.docs-guide-viewer-cmp-content';

  @Input('data') public data: IDataItem;
  @Input('containerCssClass')
  set containerCssClass(val: string) {
    if (val) {
      this._containerCssClass = val;
    }
  }
  @Output() contentLoaded = new EventEmitter<void>();

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
