/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { IPollForValueConfig, pollForValueWithConfig } from '@uiux/rxjs/pipes';
import { getIn, hasValueIn } from '@uiux/fn/common';

export interface IVendorFile {
  path: string;
  global: string;
  callback?: string;
}

export const LOAD_EVENT_KEYS: any = {
  ON_READY_STATE_CHANGE: 'onreadystatechange',
  READY_STATE: 'readyState',
};

export class $Script {
  loaded = false;
  body: Node;
  subject: BehaviorSubject<any>;

  constructor(
    private _pollForValueWithConfig: Function,
    private _document: HTMLDocument,
    private _window: any,
    public config: IVendorFile
  ) {
    this.subject = new BehaviorSubject({
      [config.global]: null,
    });

    this.body = _document.getElementsByTagName('body')[0];
  }

  load(): void {
    const el: HTMLScriptElement = this._document.createElement('script');

    if (this.config.callback) {
      this._createCallback(this.config.callback);
    } else {
      this._onLoad(el);
    }

    el.async = true;
    el.type = 'text/javascript';
    el.src = this.config.path;
    this.body.appendChild(el);
  }

  _createCallback(_callback: string): void {
    this._window.nativeWindow[_callback] = () => {
      this.subject.next({
        [this.config.global]: getIn(this._window.nativeWindow, this.config.global),
      });
    };
  }

  _onLoad(el: HTMLScriptElement): void {
    el.onload = el.onerror = el[LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE] = () => {
      if (
        (el[LOAD_EVENT_KEYS.READY_STATE] && !/^c|loade/.test(el[LOAD_EVENT_KEYS.READY_STATE])) ||
        this.loaded
      ) {
        return;
      }

      // assign noop function to prevent future load attempts
      el.onload = el[LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE] = () => {
        /* noop */
      };
      this.loaded = true;

      const pollConfig: IPollForValueConfig = {
        delay: 250,
        interval: 250,
        timeout: 5000,
        sourceObservable: () => this.getGlobalFromWindow(),

        // find value on global object, or global object itself
        compare: (value: any) => {
          return hasValueIn(value, [this.config.global]);
        },
      };

      fromPromise(this.getGlobalFromWindow())
        .pipe(
          // Poll until value is present
          this._pollForValueWithConfig(pollConfig)
        )
        .subscribe(
          (_globalResult: any) => {
            this.subject.next(_globalResult);
          },
          () => {
            this.subject.error(`${this.config.global} not loaded.`);
          }
        );
    };
  }

  getGlobalFromWindow(): any {
    return new Promise<void>((resolve: Function) => {
      resolve({
        [this.config.global]: getIn(this._window.nativeWindow, this.config.global),
      });
    });
  }
}

export function lazyloadVendorScriptFactory(
  _document: HTMLDocument,
  _window: any,
  config: IVendorFile
): $Script {
  return new $Script(pollForValueWithConfig, _document, _window, config);
}
