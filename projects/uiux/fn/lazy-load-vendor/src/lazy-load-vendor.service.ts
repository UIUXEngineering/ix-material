/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Inject, Optional, SkipSelf } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators/filter';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { scan } from 'rxjs/operators/scan';
import { $Script, IVendorFile, lazyloadVendorScriptFactory } from './script-loader';
import { propsHaveValue } from '@uiux/fn/object';
import { hasValue } from '@uiux/fn/value';

// @Injectable()
export class LazyLoadVendorService {
  globals: { [global: string]: $Script } = {};

  // scriptLoaderFactory: Function = lazyloadVendorScriptFactory;

  constructor(private _scriptLoaderFactory: Function, @Inject(DOCUMENT) private _doc: any) {
    /* noop */
  }

  load(config: IVendorFile): BehaviorSubject<any> {
    if (hasValue(this.globals[config.global])) {
      return this.globals[config.global].subject;
    } else {
      this.globals[config.global] = this._scriptLoaderFactory(this._doc, window, config);
      this.globals[config.global].load();
      return this.globals[config.global].subject;
    }
  }

  loadAll(configArr: IVendorFile[]): Observable<any> {
    const props: string[] = configArr.reduce((acc: any, curr: IVendorFile) => {
      acc.push(curr.global);
      return acc;
    }, []);

    return this._loadObservable(configArr, props);
  }

  _loadObservable(_configArr: IVendorFile[], _props: string[]): Observable<any> {
    return from(_configArr).pipe(
      mergeMap((config: IVendorFile) => {
        return this.load(config);
      }),
      scan((acc: any, curr: any) => {
        // because there is no 'else' to test
        /* istanbul ignore else */
        if (curr) {
          const key: string = Object.keys(curr)[0];
          acc[key] = curr[key];
        }
        return acc;
      }, {}),
      filter((result: any) => {
        return propsHaveValue(result, _props);
      })
    );
  }

  createConfig(_global: string, _path: string, _callback?: string): IVendorFile {
    return {
      global: _global,
      path: _path,
      callback: _callback,
    };
  }
}

export function _lazyLoadVendorFactory(
  parentDispatcher: LazyLoadVendorService | null,
  _document: any
): LazyLoadVendorService {
  if (!parentDispatcher) {
    return new LazyLoadVendorService(lazyloadVendorScriptFactory, _document);
  } else {
    return parentDispatcher;
  }
}

export const LAZY_LOAD_VENDOR_PROVIDER: any = {
  provide: LazyLoadVendorService,

  // provide params to SAMPLE_MODEL_PROVIDER_FACTORY
  //
  // Look for SampleModelService in parent modules ( SkipSelf ),
  // if not found, pass null ( Optional ) to factory provider.
  //
  // Optional: Injector provides null if the dependency is not found.
  // SkipSelf: Specifies that the dependency resolution should start from the parent injector.
  deps: [[new Optional(), new SkipSelf(), LazyLoadVendorService], DOCUMENT],

  useFactory: _lazyLoadVendorFactory,
};
