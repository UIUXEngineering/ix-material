import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { clone, propsHaveValue } from '@uiux/cdk/object';
import { StoreSubject } from '@uiux/cdk/store';
import { default as _forIn } from 'lodash-es/forIn';
import { default as _get } from 'lodash-es/get';
import { Subscription } from 'rxjs/Subscription';
import { ROUTES } from '../../../configs/nav-items';
import { IDataItem } from '../../../models/routes';
import { IRouteService, RouteService } from '../route/route.service';

export interface IRouteStore {
  cdk: IDataItem[];
  material: IDataItem[];
  guides: IDataItem[];
  icons: IDataItem[];
  themes: IDataItem[];
  allRoutes: IDataItem[];
  searchResults: IDataItem[];
  currentRouteData: IDataItem;
  route: IRouteService;
  dataItems: { [key: string]: IDataItem };
  initial: {
    cdk: IDataItem[];
    material: IDataItem[];
    guides: IDataItem[];
    allRoutes: IDataItem[];
  };
}

const intialDataItem: IDataItem = {
  route: ``,
  name: '',
  desc: '',
  base: '',
  githubSpec: '',
  seeAlso: [],
  version: '',
  icon: '',
  search: '',
};

const initialStore: IRouteStore = {
  cdk: [],
  material: [],
  guides: [],
  icons: [],
  themes: [],
  allRoutes: [],
  searchResults: [],
  route: null,
  dataItems: {},
  currentRouteData: clone(intialDataItem),
  initial: {
    cdk: [],
    material: [],
    guides: [],
    allRoutes: [],
  },
};

_forIn(ROUTES, (project: { [key: string]: any }, projectKey: string) => {
  _forIn(project, (section: { [key: string]: any }, sectionKey: string) => {
    // Each section is a parent to IDataItems
    const parentItem: any = {
      name: sectionKey.replace(new RegExp('-', 'g'), ' '),
      base: sectionKey, // base route
      children: [],
    };

    _forIn(section, (dataItem: IDataItem, dataItemKey: string) => {
      // store dataItems in various locations for ease of parsing
      // in different scenarios
      initialStore.dataItems[dataItemKey] = dataItem;
      parentItem.children.push(dataItem);
      initialStore.allRoutes.push(dataItem);
    });

    if (!initialStore[projectKey]) {
      initialStore[projectKey] = [];
    }
    initialStore[projectKey].push(parentItem);
  });

  initialStore.initial[projectKey] = [...initialStore[projectKey]];
});

initialStore.initial.allRoutes = [...initialStore.allRoutes];

export interface IRouteAction {
  type: string;
  query: string;
}

export interface ICurrentRouteAction {
  currentRouteData: IDataItem;
  route: IRouteService;
}

const currentRouteReducer = function(
  _state: IRouteStore,
  _action: ICurrentRouteAction
): IRouteStore {
  _state.currentRouteData = _action.currentRouteData;
  _state.route = _action.route;
  return _state;
};

@Injectable()
export class ApiRefService {
  private _routerSub: Subscription = Subscription.EMPTY;

  routes: any = ROUTES;

  value: StoreSubject<IRouteStore, IRouteAction> = new StoreSubject<IRouteStore, IRouteAction>({
    initialStore: initialStore,
    rootReducer: {
      currentRoute: currentRouteReducer,
    },
  });

  constructor(private _routerService: RouteService, private _router: Router) {
    this._routerSub = _routerService.value.subscribe((r: IRouteService) => {
      if (propsHaveValue(r, ['category', 'base'])) {
        const payload: ICurrentRouteAction = <any>{};

        if (r.doc) {
          const _currentRouteData = _get(ROUTES, [r.category, r.base, r.doc]);
          if (_currentRouteData) {
            payload.currentRouteData = ROUTES[r.category][r.base][r.doc];
          } else {
            this._router.navigate(['/']);
          }

        }

        payload.route = r;

        this.value.action['currentRoute'](payload);
      }
    });
  }

  selectDocTab(tab: string): void {
    const _value: IRouteStore = this.value.getValue();
    const _currentRoute: string[] = _value.currentRouteData.route.split('/');
    _currentRoute.splice(-1, 1);

    if (_value.route.tab !== tab) {
      const _newRoute: string = [..._currentRoute, tab].join('/');
      this._router.navigateByUrl(_newRoute);
    }
  }

  getDataItem(key: string): IDataItem {
    if (initialStore.dataItems[key]) {
      return initialStore.dataItems[key];
    } else {
      return intialDataItem;
    }
  }
}

export function _apiRefServiceFactory(a: ApiRefService, b: RouteService, c: Router): ApiRefService {
  return a || new ApiRefService(b, c);
}

export const API_REF_PROVIDER: any = {
  provide: ApiRefService,
  deps: [[new Optional(), new SkipSelf(), ApiRefService], RouteService, Router],
  useFactory: _apiRefServiceFactory,
};
