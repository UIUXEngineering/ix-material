import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event, NavigationEnd, Router } from '@angular/router';
import { hasValue } from '@uiux/fn/common';

export interface IRouteService {
  event: Event;
  url: string;
  base: string;
  category: string;
  doc: string;
  tab: string;
}

export const initialRouteData: IRouteService = {
  event: null,
  url: '',
  base: '',
  category: '',
  doc: '',
  tab: '',
};

@Injectable()
export class RouteService {
  value: BehaviorSubject<IRouteService> = new BehaviorSubject<IRouteService>(initialRouteData);

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (hasValue(event.url)) {
          const parts = event.url.split('/');

          this.value.next({
            event: event,
            url: event.url,
            category: parts[1],
            base: parts[2],
            doc: parts[3],
            tab: parts[4] || '',
          });
        }
      }
    });
  }
}

export function _routesServiceFactory(a: RouteService, b: Router): RouteService {
  return a || new RouteService(b);
}

export const ROUTE_PROVIDER: any = {
  provide: RouteService,
  deps: [[new Optional(), new SkipSelf(), RouteService], Router],
  useFactory: _routesServiceFactory,
};
