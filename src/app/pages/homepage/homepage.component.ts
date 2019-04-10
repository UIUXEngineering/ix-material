import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Injectable,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { hasValue } from '@uiux/fn/common';
import { default as _uniqBy } from 'lodash-es/uniqBy';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import {
  APP_NAME,
  FN,
  COMPONENTS,
  GUIDES,
  ICON,
  ICONS,
  POC,
  THEMES,
} from '../../../configs/constants';
import { ROUTES } from '../../../configs/nav-items';
import { svgAssets } from '../../../environments/svgIconAssets';
import { IDataItem } from '../../../models/routes';
import { fadeAnimation } from '../../animations';
import { ApiRefService, IRouteStore } from '../../services/api-ref/api-ref.service';
import { ComponentPageTitle } from '../../services/page-title/page-title';

export interface IHomePageData {
  search: string;
  data: IDataItem[];
}

@Injectable()
export class HomePageModel {
  value: BehaviorSubject<IHomePageData> = new BehaviorSubject<IHomePageData>({
    search: null,
    data: [],
  });
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit, OnDestroy {
  private _apiSub: Subscription = Subscription.EMPTY;
  private _modelSub: Subscription = Subscription.EMPTY;
  private _formSub: Subscription = Subscription.EMPTY;
  private _timer: any;
  private _isInit = false;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.app-route-animation') classAnimation = true;

  searchFormGroup: FormGroup;
  displayedColumns = ['icon', 'name', 'desc', 'version'];
  apis: IDataItem[] = [];
  filteredAPIs: IDataItem[] = [];
  icon = ICON;

  seeGuides = `${GUIDES}/getting-started/install`;
  seeFn = `${FN}/guides/fn-overview`;
  seePoc = `${POC}/guides/poc-overview`;
  seeMaterial = `${COMPONENTS}/guides/mat-overview`;
  seeThemes = `${THEMES}/demos/overview`;
  seeIcons = `${ICONS}/custom/search`;

  constructor(
    public _componentPageTitle: ComponentPageTitle,
    public _api: ApiRefService,
    private _router: Router,
    private _model: HomePageModel,
    private _cd: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconSetInNamespace(
      'iconList',
      sanitizer.bypassSecurityTrustResourceUrl(svgAssets.ICON_SET)
    );
    this.searchFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {
    this._modelSub = this._model.value.subscribe((value: IHomePageData) => {
      this.filteredAPIs = value.data;

      if (!this._isInit) {
        this._isInit = true;
        this.searchFormGroup.reset({
          search: value.search,
        });
      }

      this._cd.markForCheck();
    });

    this._apiSub = this._api.value.subscribe((r: IRouteStore) => {
      this.apis = r.allRoutes;
    });

    this._componentPageTitle.title = APP_NAME;

    this._formSub = this.searchFormGroup.valueChanges.subscribe((_val: any) => {
      const val = _val.search;
      if (hasValue(val) && val.length > 2) {
        if (this._timer) {
          clearTimeout(this._timer);
        }

        this._timer = setTimeout(() => {
          this.filterSearch(val);
        }, 300);
      } else {
        this.filteredAPIs = [];
      }
    });
  }

  onSubmit(): void {
    let val: string = this.searchFormGroup.value.search;
    val = hasValue(val) ? val.trim() : '';

    // string could be empty after trim
    if (hasValue(val)) {
      this.filterSearch(val);
    }
  }

  iconIsSvg(val: string): boolean {
    return val.indexOf(':') > -1;
  }

  filterSearch(val: string): void {
    const results = val
      .split(' ')

      // remove empty strings from multiple consecutive spaces typed in input field
      .reduce((acc: IDataItem[], searchValue: string) => {
        if (hasValue(searchValue)) {
          acc = acc.concat(
            this.apis.filter((api: IDataItem) => {
              return (
                this._stringMatch(searchValue, api.name) ||
                this._stringMatch(searchValue, api.desc) ||
                this._stringMatch(searchValue, api.search) ||
                this._stringMatch(searchValue, api.version)
              );
            })
          );
        }
        return acc;
      }, []);

    this._model.value.next({
      search: val,
      data: _uniqBy(results, 'name'),
    });
  }

  onSelectRow(val: IDataItem): void {
    this._router.navigateByUrl(val.route);
  }

  ngOnDestroy(): void {
    this._apiSub.unsubscribe();
    this._modelSub.unsubscribe();
    this._formSub.unsubscribe();
  }

  private _stringMatch(search: string, value: string): boolean {
    return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
  }

  private buildFormGroup(): FormGroup {
    const group: any = {
      search: new FormControl('', []),
    };

    return new FormGroup(group);
  }
}
