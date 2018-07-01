import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IxOnRenderCompleteService {
  private _cache: any = {};

  isComplete(key: string): Observable<any> {
    return (
      this._getCache(key)

        // if val is true
        .pipe(distinctUntilChanged())
    );
  }

  complete(key: string) {
    this._getCache(key).next(true);
  }

  reset(key: string) {
    this._getCache(key).next(false);
  }

  /**
   * remove cache item.
   * this should only be called by consumer.
   * @param key
   */
  destroy(key: string) {
    this._getCache(key).complete();
    delete this._cache[key];
  }

  private _getCache(key: string): BehaviorSubject<boolean> {
    if (!this._cache[key]) {
      this._cache[key] = new BehaviorSubject(false);
    }

    return this._cache[key];
  }
}

export function _spOnRenderCompleteFactory(
  parentDispatcher: IxOnRenderCompleteService
): IxOnRenderCompleteService {
  return parentDispatcher || new IxOnRenderCompleteService();
}

export const IX_ON_RENDER_COMPLETE_PROVIDER: any[] = [
  {
    provide: IxOnRenderCompleteService,
    useFactory: _spOnRenderCompleteFactory,
    // tslint:disable-next-line
    deps: [[new Optional(), new SkipSelf(), IxOnRenderCompleteService]],
  },
];
