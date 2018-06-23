/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { IndexedTableSubject } from './indexed-table/indexed-table-subject';
import { IndexedTable } from './indexed-table/indexed-table';
import { HashStore } from './hash-store';

export class TransformSubject<T> extends IndexedTableSubject<T> {
  private _hashTable: IndexedTable;
  private _transformSubject: IndexedTableSubject<T>;
  private _storeKeys: string[];
  private _transformKeys: string[];

  constructor(private _map: any, private _store: HashStore<T>) {
    super();
    this._boot();
  }

  private _boot(): void {
    this._transformSubject = new HashStore();
    this._transformSubject.initializeHashTable(this._map);

    const _transformKeys = this._transformSubject._hash.keyList();
    this._transformKeys = _transformKeys && _transformKeys.length ? _transformKeys : [];
    this.addStore(this._store);
  }

  addStore(_store: HashStore<T>): void {
    this._store = _store;
    this._storeKeys = _store._hash.keyList();
    _store.subscribe(() => {
      this._transformKeys.forEach((mapHashKey: string) => {
        if (this._storeKeys.indexOf(mapHashKey) > -1) {
          const value: any = this._store._hash.keyValue(mapHashKey);
          this._transformSubject.setKey(mapHashKey, value);
        }
      });

      super.next(this._transformSubject.getValue());
    });
  }

  _addHash(_hash: IndexedTable): void {
    this._hashTable = _hash;
    this._storeKeys = _hash.keyList();
    _hash.onUpdateObject.subscribe(() => {
      this._transformKeys.forEach((mapHashKey: string) => {
        if (this._storeKeys.indexOf(mapHashKey) > -1) {
          const value: any = this._hashTable.keyValue(mapHashKey);
          this._transformSubject.setKey(mapHashKey, value);
        }
      });

      super.next(this._transformSubject.getValue());
    });
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed) {
      subscriber.next(this._transformSubject.getValue());
    }
    return subscription;
  }
}
