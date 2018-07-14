import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';
import { ReferenceLink, ReferencesStoreService, ReferenceStore } from './_store/references-store.service';

@Component({
             selector: 'references',
             templateUrl: './references.component.html',
             styleUrls: ['./references.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class ReferencesComponent implements OnInit, OnDestroy {
  private _storeSub: Subscription = Subscription.EMPTY;

  data: IDataItem = ROUTES.guides['getting-started'].references;
  rxjsSamples: ReferenceLink[] = [];
  componentLibs: ReferenceLink[] = [];

  constructor(private _store: ReferencesStoreService,
              private _cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this._storeSub = this._store.value
      .subscribe((r: ReferenceStore) => {
        this.rxjsSamples = r.rxjsSamples;
        this.componentLibs = r.componentLibs;
        this._cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this._storeSub.unsubscribe();
  }
}
