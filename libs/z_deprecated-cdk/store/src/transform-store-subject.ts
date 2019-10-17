/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { StoreSubject } from './store-subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs';
import { IndexedTableSubject } from './indexed-table/indexed-table-subject';
import { IndexedTable } from './indexed-table/indexed-table';
import { ITransformConfig } from './interfaces';
import { hasValue } from '@uiux/cdk/value';
import { default as reduce } from 'lodash-es/reduce';

export class TransformStoreSubject<T> extends IndexedTableSubject<T> {
  private _store: StoreSubject<T>;
  private _hashTable: IndexedTable;
  private _transformSubject: IndexedTableSubject<T>;
  private _storeKeys: string[];
  private _transformKeys: string[];
  transforms: { [key: string]: TransformStoreSubject<any> } = {};

  // tslint:disable
  constructor(private _map: any, private _storeSubject: StoreSubject<T>) {
    super();
    this._transformSubject = new StoreSubject();
    this._transformSubject.initializeHashTable(this._map);

    const _transformKeys = this._transformSubject._hash.keyList();
    this._transformKeys = _transformKeys && _transformKeys.length ? _transformKeys : [];

    if (this._storeSubject) {
      this.addStore(this._storeSubject);
    }
  }
  // tslint:enable

  addStore(_store: StoreSubject<T>): void {
    this._store = _store;
    this._storeKeys = _store._hash.keyList();
    this._store.subscribe(() => {
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

  private addTransformConfig(_transformConfig: { [key: string]: ITransformConfig<T> }): void {
    reduce(
      _transformConfig,
      (transformDict: any, _transformMap: any, transformKey: string) => {
        transformDict[transformKey] = new TransformStoreSubject(_transformMap, this._storeSubject);
        transformDict[transformKey]._addHash(this._hash);
        return transformDict;
      },
      this.transforms
    );
  }

  /**
   * Do not create a TransformSubject Manually
   * @param key string
   * @param config ITransformConfig
   * @returns TransformSubject
   */
  transform(key: string, config?: ITransformConfig<T>): TransformStoreSubject<T> {
    if (!this.transforms[key]) {
      if (config && hasValue(config)) {
        this.addTransformConfig({
          [key]: config,
        });
      } else {
        throw new Error('A config of ITransformConfig interface is' + ' required to create new transform');
      }
    }

    return this.transforms[key];
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed) {
      subscriber.next(this._transformSubject.getValue());
    }
    return subscription;
  }
}
