/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  IHashTable,
  IIndexedItem,
  IIndexedItemDict,
  IIndexedTableItem,
  IIndexedTableItemSubject,
} from './reducers/interfaces';
import { default as difference } from 'lodash-es/difference';
import { default as forIn } from 'lodash-es/forIn';
import { default as forEach } from 'lodash-es/forEach';
import { default as sortBy } from 'lodash-es/sortBy';
import { default as filter } from 'lodash-es/filter';
import { default as set } from 'lodash-es/set';
import { createIndexDict } from './reducers/create-indexed-dict';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { tableItemExists } from './reducers/table-item-exists';
import { tableItemPathMatchesPath } from './reducers/table-item-path-matches';
import { createTableItem } from './reducers/create-table-item';
import { createIndexItem } from './reducers/create-indexed-item';
import { getDataType, getResetValue, isObjectDataType } from './reducers/data-type';
import { getItemPath } from './reducers/get-item-prop';
import { fromJS } from 'immutable';
import { ImmutableHashSubject } from './immutable-hash-subject';
import { CON, DATA_TYPE } from './constants';
import { allPropsHaveValue, createObjectWithPath, hasValueIn } from '@uiux/cdk/object';
import { isScalar, hasValue } from '@uiux/cdk/value';
import { toJSPipe } from '@uiux/cdk/rxjs';

export interface IndexedTableConfig {
  allPropsHaveValue?: boolean;
}

// CRUD API on table
export class IndexedTable {
  private _map: any = null;
  private _object: any = fromJS({});
  private _destroyed = false;

  get object(): any {
    return this._object;
  }

  _allPropsHaveValue = false;
  table: IHashTable = {};
  onUpdateObject: Subject<any> = new Subject();

  constructor(config?: IndexedTableConfig) {
    if (config && config.hasOwnProperty('allPropsHaveValue')) {
      this._allPropsHaveValue = config.allPropsHaveValue || false;
    }
  }

  getValue(): any {
    return this._object;
  }

  /**
   * Provide an object which to create the path
   * mapping for the data structure.
   *
   * If in the hash table a key exists that does
   * not exist on the provided object, the table
   * item's subscribers sent a 'complete' notification,
   * the the table item is deleted.
   *
   * If keys in the provided object are not in
   * the hash table, and new table item is created.
   *
   * If a table item is created, the established
   * rxjs BehaviorSubject is used to send the object
   * from the provided object's key.
   *
   * Also Called after object is created or iterated
   */
  create(object: any, keyMap: any = null): void {
    if (this._destroyed) {
      return;
    }

    // not immutable
    const _data: any = object.toJS ? object.toJS() : object;

    this._map = this._map || keyMap;

    // create a new hash index dictionary of object
    const _newTable = createIndexDict(_data, { _keyMap: keyMap });

    // _removeFromTable table items not included in new object
    // each table item has a BehaviorSubject, so
    // send a 'complete' notification before deleting
    // from table object
    const diff = difference(Object.keys(this.table), Object.keys(_newTable));

    forEach(diff, (hashKey: string) => {
      this._removeFromTable(hashKey);
    });

    /**
     * For item paths in new object that
     * have the same key for a different path
     * in the hash table, move the table
     * item to the new object path.
     */
    forIn(_newTable, (item: IIndexedItem) => {
      if (tableItemExists(this.table, item.hashKey)) {
        const _itemPath: string | null = getItemPath(item);
        if (_itemPath && !tableItemPathMatchesPath(this.table, item.hashKey, _itemPath)) {
          /**
           * Only copy object from table
           * if new object is not valid
           */
          this._removeFromTable(item.hashKey);
        }
      }
    });

    // rebuild table
    forIn(_newTable, (item: IIndexedItem) => {
      const _tableItem: IIndexedTableItem = createTableItem(this.table, item);
      this.addItemToTable(_tableItem);
    });

    // TODO reconstruct Object with keymap
    const items: IIndexedTableItem[] = sortBy(
      filter(this.table, (i: IIndexedTableItem) => {
        return !i._removed && i._isScalar;
      }),
      [
        (o: IIndexedTableItem) => {
          // sort
          return o.path.length;
        },
      ]
    );

    const _extendObject: any = {};

    forEach(items, (item: IIndexedTableItem) => {
      const $objectValue: any = this._object.getIn(
        this.table[item.hashKey].subject.getPath(),
        CON.NO_VALUE
      );
      if (isScalar(_newTable[item.hashKey].value)) {
        set(_extendObject, item.path, _newTable[item.hashKey].value);
        delete this.table[item.hashKey].value;
      } else if (isScalar($objectValue) && $objectValue !== CON.NO_VALUE) {
        set(_extendObject, item.path, $objectValue);
      }
    });

    this._object = fromJS(_extendObject);

    this._next();
  }

  /**
   * Similar to create, but table items
   * are not removed
   */
  extend(object: any, path: string = '', keyMap: any = null): void {
    if (!hasValue(object)) {
      return;
    }

    if (this._destroyed) {
      return;
    }
    // this._object = this._object.mergeDeep(object);
    object = object && object.toJS ? object.toJS() : object;
    this._map = this._map || keyMap;
    // concat path to object props if needed
    let _object: any;
    if (path.length) {
      _object = createObjectWithPath(path, object);
    } else {
      _object = object;
    }

    const _newTable: IIndexedItemDict = createIndexDict(_object, { _keyMap: keyMap });

    /**
     * For item paths in new object that
     * have the same key for a different path
     * in the hash table, move the table
     * item to the new object path.
     */
    forIn(_newTable, (item: IIndexedItem) => {
      if (tableItemExists(this.table, item.hashKey)) {
        const _itemPath: string | null = getItemPath(item);
        if (_itemPath && !tableItemPathMatchesPath(this.table, item.hashKey, _itemPath)) {
          /**
           * Only copy object from table
           * if new object is not valid
           */
          this._removeFromTable(item.hashKey);
        }

        if (item._isScalar) {
          this._removeFromTable(item.hashKey);
        }
      }
    });

    // append table
    forIn(_newTable, (item: IIndexedItem) => {
      const _tableItem: IIndexedTableItem = createTableItem(this.table, item);
      this.addItemToTable(_tableItem);
    });

    // TODO reconstruct Object with keymap
    const items: IIndexedTableItem[] = sortBy(
      filter(this.table, (i: IIndexedTableItem) => {
        return !i._removed && i._isScalar;
      }),
      [
        (o: IIndexedTableItem) => {
          // sort
          return o.path.length;
        },
      ]
    );

    const _extendObject: any = {};

    forEach(items, (item: IIndexedTableItem) => {
      const $objectValue: any = this._object.getIn(
        this.table[item.hashKey].subject.getPath(),
        CON.NO_VALUE
      );
      if (_newTable[item.hashKey] && isScalar(_newTable[item.hashKey].value)) {
        set(_extendObject, item.path, _newTable[item.hashKey].value);
        delete this.table[item.hashKey].value;
      } else if (isScalar($objectValue) && $objectValue !== CON.NO_VALUE) {
        set(_extendObject, item.path, $objectValue);
      }
    });

    this._object = fromJS(_extendObject);

    this._next();
  }

  getKey(hashKey: string, distint: boolean = true): Observable<any> {
    if (this._destroyed) {
      return this._getSubject(hashKey).pipe(
        this._allPropsHaveValuePipe(),
        toJSPipe()
      );
    }
    if (distint) {
      return this._getSubject(hashKey).pipe(
        this._allPropsHaveValuePipe(),
        distinctUntilChanged(),
        toJSPipe()
      );
    } else {
      return this._getSubject(hashKey).pipe(
        this._allPropsHaveValuePipe(),
        toJSPipe()
      );
    }
  }

  keyValue(hashKey: string): any {
    if (this.table[hashKey]) {
      const path: any[] = this.table[hashKey].subject.getPath();
      return this._object.getIn(path, null);
    }
  }

  setKey(hashKey: string, value: any, keyMap: any = null): void {
    if (this._destroyed) {
      return;
    }
    this._map = this._map || keyMap;

    if (isObjectDataType(value)) {
      const _path = getItemPath(this.table[hashKey]);
      let _obj;
      if (_path && _path.length) {
        _obj = createObjectWithPath(_path, value);
      } else {
        _obj = {
          [hashKey]: value,
        };
      }
      this.extend(_obj);
    } else {
      // If table item exists, does it have a path that is not empty?
      if (this.table[hashKey]) {
        if (hasValue(this.table[hashKey].path)) {
          // Is there a data node with this path?
          const _path: string[] = this.table[hashKey].subject.getPath();

          if (_path && this._object.hasIn(_path)) {
            let _dataValue: any = this._object.getIn(_path);
            _dataValue = _dataValue && _dataValue.toJS ? _dataValue.toJS() : _dataValue;
            // Is the data node a plain object?
            if (isObjectDataType(_dataValue)) {
              // remove all table items in the path of that node
              // this 'completes' all subjects in the node's children
              this._removeFromTable(hashKey);
            }
          }
        } else {
          // If not object in _object isPlainObject, is the object in the subject
          // a plain object?
          if (isObjectDataType(this.table[hashKey].subject.getValue())) {
            this._removeFromTable(hashKey);
            this.table[hashKey]._removed = false;
          }
        }
      }

      // creates table Item if not already created
      // publishes object of provided hashKey
      this._setTableItemValue(hashKey, value);
      this.table[hashKey]._removed = false;

      this._next();
    }
  }

  // table is a flat structure representing a tree
  // it's not actually a tree
  _removeFromTable(hashKey: string): void {
    if (this.table[hashKey]) {
      this.table[hashKey]._removed = true;
    }

    if (hasValueIn(this.table, hashKey + '.path')) {
      const pathOfHashKey: string | null = getItemPath(this.table[hashKey]);

      forIn(this.table, (item: IIndexedTableItem, itemHashKey: string) => {
        const _itemPath: string | null = getItemPath(item);
        if (pathOfHashKey && _itemPath && _itemPath.indexOf(pathOfHashKey) !== -1) {
          /**
           * Remove current hashKey reference from parent hashKey.
           */
          if (allPropsHaveValue(this.table[itemHashKey].parent)) {
            if (this.table[this.table[itemHashKey].parent.hashKey]) {
              this.table[this.table[itemHashKey].parent.hashKey].value = null;
              this.table[this.table[itemHashKey].parent.hashKey].subject.next(null);
            }
          }

          // send null object
          this.table[itemHashKey].subject.next(null);
          this.table[itemHashKey].value = null;

          /**
           * delete hashKey from table.
           */
          this.table[itemHashKey]._removed = true;
        }
      });
    }
  }

  addItemToTable(item: IIndexedTableItem): void {
    if (!this.table[item.hashKey]) {
      this.table[item.hashKey] = <IIndexedTableItemSubject>item;
    } else {
      this.table[item.hashKey]._isScalar = item._isScalar;
      this.table[item.hashKey].path = item.path;
      this.table[item.hashKey].parent = item.parent;
      this.table[item.hashKey]._keyMap = item._keyMap;
      this.table[item.hashKey]._type = item._type;
      this.table[item.hashKey]._removed = item._removed;
      this.table[item.hashKey].search = item.search;
    }

    if (!this.table[item.hashKey].subject) {
      (<IIndexedTableItemSubject>this.table[item.hashKey]).subject = new ImmutableHashSubject(
        item.path,
        () => {
          return this._object;
        },
        (newData) => {
          this._object = this._object.merge(newData);
        }
      );
    }
  }

  reset(): void {
    if (this._destroyed) {
      return;
    }

    const items: IIndexedTableItem[] = sortBy(this.table, [
      (o: IIndexedTableItem) => {
        return o.path.length;
      },
    ]);

    let _resetObject: any = fromJS({});

    forEach(items, (item: IIndexedTableItem) => {
      const resetValue: any = getResetValue(item._type);
      const path: any[] = this.table[item.hashKey].subject.getPath();
      if (item._type === DATA_TYPE.OBJECT) {
        _resetObject = _resetObject.setIn(path, fromJS(resetValue));
      } else {
        _resetObject = _resetObject.setIn(path, resetValue);
      }
    });

    this._object = _resetObject;

    this._next();
  }

  destroy(): void {
    if (this._destroyed) {
      return;
    }
    forIn(this.table, (item: IIndexedTableItem) => {
      this.table[item.hashKey].subject.destroy();
    });
  }

  allPropsHaveValue(): boolean {
    return allPropsHaveValue(this.table, 'subject', (subject: ImmutableHashSubject<any>) => {
      return hasValue(subject.getValue());
    });
  }

  keyList(): string[] {
    const items: IIndexedTableItem[] = filter(this.table, (i: IIndexedTableItem) => {
      return !i._removed && i._isScalar;
    });

    return items.reduce((acc: any, item: any) => {
      acc.push(item.hashKey);
      return acc;
    }, []);
  }

  private _publishHashTableItems(): void {
    forIn(this.table, (item: IIndexedTableItemSubject) => {
      item.subject.update();
    });
  }

  private _publishTableAsObject(sendNullValue = false): void {
    if (sendNullValue) {
      this.onUpdateObject.next(null);
    } else {
      this.onUpdateObject.next(this._object.toJS());
    }
  }

  /**
   * Creates a subject if not created already
   */
  private _getSubject(hashKey: string): ImmutableHashSubject<any> {
    if (!this.table[hashKey]) {
      const _tableItem: IIndexedTableItem = createTableItem(this.table, createIndexItem(hashKey));

      this.addItemToTable(_tableItem);

      const sub: ImmutableHashSubject<any> = (<IIndexedTableItemSubject>this.table[hashKey])
        .subject;

      this._object = this._object.setIn(sub.getPath(), null);
    }

    return (<IIndexedTableItemSubject>this.table[hashKey]).subject;
  }

  private _setTableItemValue(hashKey: string, value: any): void {
    this._getSubject(hashKey).setValue(value);

    this.table[hashKey]._isScalar = isScalar(value);
    this.table[hashKey]._type = getDataType(value);
  }

  private _next(): void {
    if (this._allPropsHaveValue) {
      const tableHasValue: boolean = this.allPropsHaveValue();
      if (tableHasValue) {
        // publish _object
        this._publishTableAsObject();

        // publish each table item
        this._publishHashTableItems();
      }
    } else {
      this._publishTableAsObject();

      this._publishHashTableItems();
    }
  }

  private _allPropsHaveValuePipe<T>(): any {
    const that = this;
    return (source: Observable<T>): Observable<T> => {
      return new Observable((observer) => {
        return source.subscribe({
          next(x: any) {
            if (that._allPropsHaveValue) {
              if (that.allPropsHaveValue()) {
                observer.next(x);
              }
            } else {
              observer.next(x);
            }
          },
          error(err) {
            observer.error(err);
          },
          complete() {
            observer.complete();
          },
        });
      });
    };
  }
}
