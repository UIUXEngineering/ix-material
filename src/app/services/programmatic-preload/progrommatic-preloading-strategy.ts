/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { IRouteData } from './data.interface';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

export interface IRouteWithData extends Route {
  data?: IRouteData;
}

export interface IRouteLoadStatus {
  isLoaded: boolean;

  load(): Observable<any>;
}

export interface IProgrammaticLoad {
  [route: string]: IRouteLoadStatus;
}

@Injectable()
export class ProgrammaticPreloadingStrategy implements PreloadingStrategy {
  private _cachedRoutes: IProgrammaticLoad = {};

  // called in angular router here
  // packages/router/src/router_preloader.ts:125
  preload(route: IRouteWithData, load: () => Observable<any>): Observable<any> {
    // If not data node, create one with preload: false
    const _data: IRouteData = route.data
      ? route.data
      : <IRouteData>{
          preload: false,
        };

    if (_data.preload && typeof load === 'function') {
      load();
    } else {
      const _pathCanCache: boolean = route.path !== undefined && route.path !== '**';

      const _path: string | null = _pathCanCache && route.path ? route.path : null;

      // load if config to preload
      if (_data.preload && typeof load === 'function') {
        return load();
      }

      if (_path) {
        // Cache the route if have path
        // Cache load function
        if (_pathCanCache && !this._cachedRoutes[_path]) {
          this._cachedRoutes[_path] = <IRouteLoadStatus>{
            isLoaded: false,
            load:
              load ||
              function(): void {
                /* noop */
              },
          };
        }

        // Preload route if data.preload
        if (_data.preload && !this._cachedRoutes[_path].isLoaded) {
          // add the route path to our preloaded module array
          this._cachedRoutes[_path].isLoaded = true;
          return this._cachedRoutes[_path].load();
        }
      }
    }

    return of();
  }

  load(path: string): void {
    if (this._cachedRoutes[path] && !this._cachedRoutes[path].isLoaded) {
      this._cachedRoutes[path].isLoaded = true;
      this._cachedRoutes[path].load();
    }
  }
}
