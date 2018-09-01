/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  IHashTable,
  IIndexedItem,
  IIndexedTableItem,
  IIndexedTableItemSubject,
} from './interfaces';
import { default as uniq } from 'lodash-es/uniq';
import { default as concat } from 'lodash-es/concat';
import { getDataType } from './data-type';
import { hasValue } from '@uiux/cdk/value';

export function createTableItem(table: IHashTable, item: IIndexedItem): IIndexedTableItem {
  let _newTableItem: IIndexedTableItem = <IIndexedTableItem>{};
  const _timestamp: number = Date.now();

  if (!hasValue(item['_createdAt'])) {
    item['_createdAt'] = _timestamp;
  }

  if (!hasValue(item['_updatedAt'])) {
    item['_updatedAt'] = _timestamp;
  }

  if (!hasValue(item['_timestamp'])) {
    item['_timestamp'] = _timestamp;
  }

  if (!table[item.hashKey]) {
    _newTableItem = {
      hashKey: item.hashKey,
      _isScalar: item._isScalar,
      parent: item.parent,
      path: item.path,
      _type: getDataType(item.value),
      _removed: false,
      search: item.search,
    };

    _newTableItem['_createdAt'] = item['_createdAt'];
    _newTableItem['_updatedAt'] = item['_updatedAt'];
    _newTableItem['_timestamp'] = _timestamp;
  } else {
    _newTableItem.hashKey = item.hashKey;
    _newTableItem._isScalar = item._isScalar;
    _newTableItem.path = item.path;
    _newTableItem._removed = false;
    _newTableItem.search = uniq(concat(table[item.hashKey].search, item.search));
    _newTableItem.parent = item.parent;
    (<IIndexedTableItemSubject>_newTableItem).subject = table[item.hashKey].subject;
    (<IIndexedTableItemSubject>_newTableItem).subject.setPath(item.path);
    _newTableItem['_createdAt'] = table[item.hashKey]['_createdAt'];
    _newTableItem['_updatedAt'] = _timestamp;
    _newTableItem['_timestamp'] = _timestamp;
  }

  return _newTableItem;
}
