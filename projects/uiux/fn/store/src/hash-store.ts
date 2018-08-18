/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IStoreConfig } from './interfaces';
import { default as isEmpty } from 'lodash-es/isEmpty';
import { IndexedTableSubject } from './indexed-table/indexed-table-subject';
import { clone, getIn } from '@uiux/cdk/object';

export class HashStore<S> extends IndexedTableSubject<S> {
  private _storeCache: any[] = [];
  private _compositeState: HashStore<S>;
  private _compareFn: Function;
  private _initialStore: any = {};
  private _initialized = false;
  private _record = false;

  replaySubject: ReplaySubject<S>;

  constructor(private _config?: IStoreConfig) {
    super();

    this.parseConfig();
    this.initializeStore(getIn(_config, 'initialStore', {}));
  }

  private parseConfig(): void {
    if (this._config) {
      this.record = <boolean>this._config.record;

      if (this._config.hasOwnProperty('hash')) {
        this._useBehaviorStore = !this._config.hash;
      } else {
        this._useBehaviorStore = true;
      }
    }
  }

  get initialStore(): S {
    return this._initialStore;
  }

  get record() {
    return this._record;
  }

  set record(_bool: boolean) {
    this._record = _bool;
  }

  get cache(): S[] {
    return clone(this._storeCache);
  }

  initializeStore(_initialState?: S): void {
    if (_initialState) {
      this._initialStore = _initialState;
    }

    if (!this._initialized) {
      if (this._useBehaviorStore) {
        this._behaviorStore = clone(this.initialStore);
      } else {
        this.initializeHashTable(this.initialStore);
      }
      this._initialized = true;
      this.replaySubject = new ReplaySubject();
      this.replaySubject.next(this.initialStore);
    } else {
      this.next(this.initialStore);
    }
  }

  getValue(): any {
    if (this._useBehaviorStore) {
      return clone(this._behaviorStore);
    } else {
      return super.getValue();
    }
  }

  next(_state: S): void {
    if (this.record) {
      this._storeCache.push(_state);
      this.replaySubject.next(_state);
    }

    if (this._compareFn && this._compositeState) {
      if (this._compareFn.apply(null, [_state])) {
        this._compositeState.next(_state);
      }
    }

    if (this._useBehaviorStore) {
      this._behaviorStore = clone(_state);
      super.next(this._behaviorStore);
    } else {
      this._hash.extend(_state);
    }
  }

  /**
   * Resend states to all subscribers.
   */
  republishAll(): void {
    from(this._storeCache).subscribe((_state: S) => {
      this.next(_state);
    });
  }

  replayAll(): Observable<S> {
    return from(this._storeCache);
  }

  startRecord(): void {
    this.record = true;
  }

  composeResult(_compositeState: HashStore<any>, _compareFn: Function): void {
    this.subscribe((_state: S) => {
      if (_compareFn.apply(null, [_state])) {
        _compositeState.next(_state);
      }
    });
  }

  composeAction(_compositeState: HashStore<S>, _compareFn: Function): void {
    this._compositeState = _compositeState;
    this._compareFn = _compareFn;
  }

  stopRecord(): void {
    this.record = false;
  }

  dump(): void {
    this._storeCache = [];
  }

  reset(): void {
    if (this._useBehaviorStore) {
      this._behaviorStore = clone(this.initialStore);
      super.next(this._behaviorStore);
    } else {
      if (!isEmpty(this.initialStore)) {
        this.initializeHashTable(this.initialStore);
      } else {
        super.reset();
      }
    }
  }
}
