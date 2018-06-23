/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { default as isObject } from 'lodash-es/isObject';
import { default as isArray } from 'lodash-es/isArray';
import { default as forEach } from 'lodash-es/forEach';
import { default as sortBy } from 'lodash-es/sortBy';
import { default as forIn } from 'lodash-es/forIn';
import { ICreateIndexDictConfig, IIndexedItem, IIndexedItemDict } from './interfaces';
import { createIndexItem } from './create-indexed-item';
import { getDataType } from './data-type';
import { hasValue, isScalar } from '@uiux/cdk/object';

function createIndexedArray(
  node: any,
  path: string = '',
  storeData: boolean = true,
  includeArray: boolean = false
): IIndexedItem[] {
  const keys: string[] = Object.keys(node);
  let result: any[] = [];
  let tempPath = '';

  if (isArray(node)) {
    if (includeArray) {
      forEach(node, (item: any, index: number) => {
        const _result: IIndexedItem = createIndexItem();
        _result.hashKey = path + '[' + index + ']';

        const lastIndex: number = _result.hashKey.lastIndexOf('.') + 1;
        if (lastIndex > -1 && lastIndex < _result.hashKey.length) {
          _result.hashKey = _result.hashKey.substr(lastIndex);
        }

        // concat path if recursion
        _result.path = path + tempPath + '[' + index + ']';

        if (storeData) {
          _result.value = item;
          _result._type = getDataType(item);
        }

        _result.parent.hashKey = path.split('.').pop() || '';
        _result.parent.path = path;

        result.push(_result);
        result = result.concat(
          createIndexedArray(item, path + '[' + index + ']', storeData, includeArray)
        );
      });
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      const parentHashKey: string = path.split('.').pop() || '';

      // concat . in path if recursion
      tempPath = path.length ? '.' + keys[i] : keys[i];

      if (isArray(node[keys[i]]) || isObject(node[keys[i]])) {
        const _result: IIndexedItem = createIndexItem();
        _result.hashKey = keys[i];

        // concat path if recursion
        _result.path = path + tempPath;

        if (storeData) {
          _result.value = node[keys[i]];
          _result._type = getDataType(node[keys[i]]);
        }

        _result.parent.hashKey = parentHashKey;
        _result.parent.path = path;

        result.push(_result);

        if (isArray(node[keys[i]])) {
          if (includeArray) {
            result = result.concat(
              createIndexedArray(node[keys[i]], path + tempPath, storeData, includeArray)
            );
          }
        } else {
          result = result.concat(
            createIndexedArray(node[keys[i]], path + tempPath, storeData, includeArray)
          );
        }
      } else {
        const _result: IIndexedItem = createIndexItem();
        _result.hashKey = keys[i];

        // concat path if recursion
        _result.path = path + tempPath;

        if (storeData) {
          _result.value = node[keys[i]];
          _result._type = getDataType(node[keys[i]]);
        }

        _result.parent.hashKey = parentHashKey;
        _result.parent.path = path;

        result.push(_result);
      }
    }
  }

  return result;
}

export function createIndexDict(node: any, config?: ICreateIndexDictConfig): IIndexedItemDict {
  const _config: ICreateIndexDictConfig = config ? config : {};
  _config.storeData = true;
  _config.includeArray = _config.includeArray ? _config.includeArray : false;
  _config.pathAsKey = _config.pathAsKey ? _config.pathAsKey : false;
  _config._keyMap = _config._keyMap ? _config._keyMap : null;

  const _keyMap = {};

  if (_config._keyMap) {
    forIn(_config._keyMap, (newKey, path) => {
      _keyMap[path] = {
        path:
          path
            .split('.')
            .slice(0, -1)
            .join('.') +
          '.' +
          newKey,
        hashKey: newKey,
      };
    });
  }

  let _result: any[] = createIndexedArray(node, '', _config.storeData, _config.includeArray) || [];

  _result = sortBy(_result, 'key');

  const count: { [key: string]: number } = {};

  const _timestamp: number = Date.now();

  // Add additional properties to hash .. search, _createdAt
  return _result.reduce((acc: any, item: IIndexedItem) => {
    forIn(_keyMap, (map, mappedPath) => {
      if (item.path.indexOf(mappedPath) === 0) {
        item.hashKey = map.hashKey;
        item.path = item.path.replace(mappedPath, map.path);
      }
    });

    if (_keyMap[item.parent.path]) {
      item.parent.hashKey = _keyMap[item.parent.path].hashKey;
      item.parent.path = _keyMap[item.parent.path].path;
    }

    let hashKey = '';
    if (!hasValue(count[item.hashKey])) {
      count[item.hashKey] = 0;
      hashKey = item.hashKey;
    } else {
      count[item.hashKey] = count[item.hashKey] + 1;
      hashKey = item.hashKey + count[item.hashKey].toString();
    }

    item.hashKey = hashKey;

    item._isScalar = isScalar(item.value);
    item.search = [];
    item['_timestamp'] = _timestamp;
    item['_createdAt'] = _timestamp;

    // hash table api controls _updatedAt to determine
    // age of value as most recent update
    item['_updatedAt'] = 0;
    acc[hashKey] = item;

    if (!_config.storeData) {
      delete acc[hashKey].value;
    }

    return acc;
  }, {});
}
