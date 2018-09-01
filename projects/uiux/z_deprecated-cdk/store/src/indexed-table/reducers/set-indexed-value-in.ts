/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { default as set } from 'lodash-es/set';
import { createIndexItem } from './create-indexed-item';
import { IIndexedItem, IIndexedItemDict, IIndexTableResponse } from './interfaces';
import { getItemPath } from './get-item-prop';

/**
 * Assumes object and hash table have been created.
 * Sets a new value to object.
 * If path of object does not exist referenced in
 * the hash table by hashKey, creates a hash table
 * item and returns flag to rebuild hash table.
 */
export function setIndexedValueIn(
  object: any,
  table: IIndexedItemDict,
  hashKey: string,
  value: string
): IIndexTableResponse {
  const response: IIndexTableResponse = {
    value: null,
    rebuild: false,
    table: table,
    object: object,
    hashKey: hashKey,
  };

  const _timestamp: number = Date.now();

  // If table item exists, can set object and path
  if (<IIndexedItem>table[hashKey]) {
    const _itemPath: string | null = getItemPath(table[hashKey]);
    if (_itemPath) {
      // set table value
      (<IIndexedItem>table[hashKey]).value = value;
      (<IIndexedItem>table[hashKey])['_updatedAt'] = _timestamp;

      // set object path
      if (object) {
        object = set(object, _itemPath, value);
      }
    }
  } else {
    response.rebuild = true;
    // Note: can't assume path with only a hashKey
    (<IIndexedItem>table[hashKey]) = createIndexItem();
    (<IIndexedItem>table[hashKey]).hashKey = hashKey;
    (<IIndexedItem>table[hashKey]).value = value;
    (<IIndexedItem>table[hashKey])['_createdAt'] = _timestamp;
  }

  (<IIndexedItem>table[hashKey])['_timestamp'] = _timestamp;

  response.object = object;
  response.value = value;
  response.table = table;
  return response;
}
