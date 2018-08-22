/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isArray, isPlainObject, isString, setIn } from '@uiux/fn/common';

/**
 * Use Object with keys or array with path notation 'a.b.c'
 * to create a javascript object.
 * @param paths array or string of path
 * @param value optional path
 * For example
 *
 * createObjectWithPaths('a.b.c', null);
 * // { a: { b: { c: null }}};
 */
export function createObjectWithPaths(paths: any | any[], value?: any): any {
  const _value: any = value ? value : null;

  if (isString(paths)) {
    return setIn({}, paths, _value);
  } else if (isArray(paths)) {
    return paths.reduce((obj, _path: string[] | string) => {
      if (isArray(_path)) {
        const [_pathInObj, _valueInObj] = <string[]>_path;
        return setIn(obj, _pathInObj, _valueInObj);
      } else {
        return setIn(obj, <string>_path, _value);
      }
    }, {});
  } else if (isPlainObject(paths)) {
    return Object.keys(paths).reduce((_obj: any, _path: string) => {
      return setIn(_obj, _path, paths[_path]);
    }, {});
  } else {
    return {};
  }
}
