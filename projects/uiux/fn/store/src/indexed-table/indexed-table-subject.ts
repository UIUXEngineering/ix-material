/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IndexedTable } from './indexed-table';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { ObjectUnsubscribedError } from 'rxjs';

export class IndexedTableSubject<T> extends Subject<T> {
  protected _useBehaviorStore = false; // use hash table as default
  protected _behaviorStore: any = {};
  _hash: IndexedTable = new IndexedTable();

  constructor() {
    super();

    this._hash.onUpdateObject.subscribe((value: any) => {
      super.next(value);
    });
  }

  get value(): T {
    return this._hash.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed) {
      if (this._useBehaviorStore) {
        subscriber.next(this._behaviorStore);
      } else {
        subscriber.next(this.toJS(this._hash.getValue()));
      }
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this.toJS(this._hash.getValue());
    }
  }

  toJS(value: any): any {
    if (value.toJS) {
      return value.toJS();
    } else {
      return value;
    }
  }

  next(value: T): void {
    this._hash.extend(value);
  }

  initializeHashTable(object: any, keyMap: any = null): void {
    this._hash.create(object, keyMap);
  }

  extend(object: any, path: string = '', keyMap: any = null): void {
    this._hash.extend(object, path, keyMap);
  }

  getKey(hashKey: string, distint: boolean = true): Observable<any> {
    return this._hash.getKey(hashKey, distint);
  }

  setKey(hashKey: string, value: any, keyMap: any = null): void {
    this._hash.setKey(hashKey, value, keyMap);
  }

  reset(): void {
    this._hash.reset();
  }

  destroy(): void {
    this._hash.destroy();
  }
}
