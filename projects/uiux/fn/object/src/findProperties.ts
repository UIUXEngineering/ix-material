/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isObject, isFunction, isArray, hasValue } from '@uiux/fn/common';

import { IFindPropertiesResult } from './_interfaces';

export function findProperties(node: any, _searchParam: any, path: string = ''): any[] {
  let tempPath = '';

  if (isArray(node)) {
    return (<any[]>node).reduce((result: IFindPropertiesResult[], item: any, index: number) => {
      return result.concat(findProperties(item, _searchParam, path + '[' + index + ']'));
    }, []);
  } else {
    return Object.keys(node).reduce((result: IFindPropertiesResult[], key: string) => {
      tempPath = path.length ? '.' + key : key;

      if (isArray(_searchParam)) {
        if (isObject(node[key]) || isArray(node[key])) {
          result = result.concat(findProperties(node[key], _searchParam, path + tempPath));
        } else {
          if (_searchContains(_searchParam, key) && hasValue(node[key])) {
            const _result: IFindPropertiesResult = _findPropertiesResultObject();
            _result.key = key;

            // concat path if recursion
            _result.path = path + tempPath;
            _result.data = node[key];

            result.push(_result);
          }
        }
      } else if (isFunction(_searchParam)) {
        // Call function on every node
        const _callResultTruthy: boolean = _searchParam.apply(null, [node[key], key]);

        if (_callResultTruthy) {
          const _result: IFindPropertiesResult = _findPropertiesResultObject();

          _result.key = key;
          _result.path = path + tempPath;
          _result.data = node[key];

          result.push(_result);
        }

        if (isObject(node[key])) {
          result = result.concat(findProperties(node[key], _searchParam, path + tempPath));
        }
      }
      return result;
    }, []);
  }
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
