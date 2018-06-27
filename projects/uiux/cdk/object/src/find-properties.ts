/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isObject } from 'lodash-es/isObject';
import { default as isFunction } from 'lodash-es/isFunction';
import { default as isArray } from 'lodash-es/isArray';
import { default as map } from 'lodash-es/map';
import { hasValue } from '@uiux/cdk/value';
import { IFindPropertiesResult } from './interfaces';

export function findProperties(node: any, _searchParam: any, path: string = ''): any[] {
  const keys: string[] = Object.keys(node);
  let result: any[] = [];
  let tempPath = '';

  if (isArray(node)) {
    map(node, (item: any, index: number) => {
      result = result.concat(findProperties(item, _searchParam, path + '[' + index + ']'));
    });
  } else {
    for (let i = 0; i < keys.length; i++) {
      // concat . in path if recursion
      tempPath = path.length ? '.' + keys[i] : keys[i];

      if (isArray(_searchParam)) {
        if (isObject(node[keys[i]]) || isArray(node[keys[i]])) {
          result = result.concat(findProperties(node[keys[i]], _searchParam, path + tempPath));
        } else {
          if (_searchContains(_searchParam, keys[i]) && hasValue(node[keys[i]])) {
            const _result: IFindPropertiesResult = _findPropertiesResultObject();
            _result.key = keys[i];

            // concat path if recursion
            _result.path = path + tempPath;
            _result.data = node[keys[i]];

            result.push(_result);
          }
        }
      } else if (isFunction(_searchParam)) {
        // Call function on every node
        const _callResultTruthy: boolean = _searchParam.apply(null, [node[keys[i]], keys[i]]);

        if (_callResultTruthy) {
          const _result: IFindPropertiesResult = _findPropertiesResultObject();

          _result.key = keys[i];
          _result.path = path + tempPath;
          _result.data = node[keys[i]];

          result.push(_result);
        }

        if (isObject(node[keys[i]])) {
          result = result.concat(findProperties(node[keys[i]], _searchParam, path + tempPath));
        }
      }
    }
  }

  return result;
}

function _findPropertiesResultObject(): IFindPropertiesResult {
  return {
    key: '',
    path: '',
    data: '',
  };
}

function _searchContains(collection, search) {
  return collection.indexOf(search) > -1;
}
