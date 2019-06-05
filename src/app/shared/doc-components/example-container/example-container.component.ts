import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZipSubject } from '@uiux/rxjs/subjects';
import { IDataItem } from '../../../../models/routes';
import { TableOfContents } from '../../util-components/table-of-contents/table-of-contents';

@Component({
  selector: 'example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleContainerComponent implements OnInit, OnDestroy {
  private _toc: TableOfContents;
  private _eventAsyncSub: Subscription = Subscription.EMPTY;
  private _eventAsync: ZipSubject<any> = new ZipSubject<any>({
    toc: null,
    contentLoaded: null,
  });

  @Input('data') public data: IDataItem;
  @Input('containerCssClass') public containerCssClass: string;

  @ViewChild('tocExample', { static: false })
  set tableOfContents(v: TableOfContents) {
    this._toc = v;
    this._eventAsync.nextKey('toc', true);
  }

  showToc = true;

  constructor(breakpointObserver: BreakpointObserver, private _cd: ChangeDetectorRef) {
    breakpointObserver
      .observe('(max-width: 1200px)')
      .pipe(map((result) => !result.matches))
      .subscribe((r) => {
        this.showToc = r;
        this._cd.markForCheck();
      });
  }

  ngOnInit(): void {
    this._eventAsyncSub = this._eventAsync.subscribe(() => {
      if (this._toc) {
        this._toc.updateScrollPosition();
      }
    });
  }

  onContentLoaded() {
    this._eventAsync.nextKey('contentLoaded', true);
  }

  ngOnDestroy(): void {
    this._eventAsyncSub.unsubscribe();
  }
}
