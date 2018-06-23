/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { InjectionToken, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';

export function _window(): any {
  return window;
}

// tslint:disable-next-line:variable-name allow-pascal-case
export const SPWindow: InjectionToken<any> = new InjectionToken<any>('SPWindowToken');

export abstract class AbstractSPWindowRef {
  abstract get nativeWindow(): any;
}

/** @deprecated use window directly */
export class SPWindowRefService extends AbstractSPWindowRef {
  private _globalSubscription: Subscription;
  private _resizing = false;

  onbeforeunload: Subject<any>;
  resize: Subject<any>;

  constructor() {
    super();

    this.onbeforeunload = new Subject();
    this.resize = new Subject();

    this.nativeWindow.addEventListener('onbeforeunload', () => {
      this.onbeforeunload.next('onbeforeunload');
    });

    this._globalSubscription = fromEvent(this.nativeWindow, 'resize').subscribe(() => {
      // way to prevent the resize event from triggering the match
      // media if there is already one event running already.
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this.resize.next('resize');
          this._resizing = false;
        }, 100);
      }
    });

    this.resize.next('resize');
  }

  get nativeWindow(): any {
    return _window();
  }

  storageAvailable(type: string): boolean {
    const storage = _window()[type];
    try {
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }

  localStorageAvailable(): boolean {
    return this.storageAvailable('localStorage');
  }

  sessionStorageAvailable(): boolean {
    return this.storageAvailable('sessionStorage');
  }
}

// tslint:disable
export function _windowRefFactory(parentDispatcher: SPWindowRefService): SPWindowRefService {
  return parentDispatcher || new SPWindowRefService();
}
// tslint:enable

export const SP_WINDOW_PROVIDER: any[] = [
  {
    provide: SPWindow,
    useFactory: _windowRefFactory,
    // tslint:disable-next-line
    deps: [[new Optional(), new SkipSelf(), SPWindowRefService]],
  },
];
