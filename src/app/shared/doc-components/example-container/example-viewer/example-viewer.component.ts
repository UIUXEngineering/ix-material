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
import { CheckContentLoaded, Content, ContentLoadedService } from '@uiux/cdk/dom';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleViewerComponent implements AfterViewChecked, OnDestroy {
  private _contentChecker: CheckContentLoaded;

  @Input('data') public data: IDataItem;
  @Input('containerCssClass') containerCssClass = '.docs-overview-viewer-cmp-content';
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
    this._contentChecker.destroy();
    this._contentChecker = null;
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
