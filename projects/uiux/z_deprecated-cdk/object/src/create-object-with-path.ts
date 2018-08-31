/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isArray } from 'lodash-es/isArray';
import { default as forEach } from 'lodash-es/forEach';
import { default as set } from 'lodash-es/set';
import { default as forIn } from 'lodash-es/forIn';
import { default as isString } from 'lodash-es/isString';
import { default as isPlainObject } from 'lodash-es/isPlainObject';

/**
 * Use Object with keys or array with path notation 'a.b.c'
 * to create a javascript object.
 */
export function createObjectWithPath(path: any | any[], value?: any): any {
  const obj: any = {};
  const _value: any = value ? value : null;

  if (isString(path)) {
    set(obj, path, _value);
  } else if (isArray(path)) {
    forEach(path, (item: string) => {
      if (isArray(item)) {
        set(obj, item[0], item[1]);
      } else {
        set(obj, item, _value);
      }
    });
  } else if (isPlainObject(path)) {
    forIn(path, (itemValue: any, _path: string) => {
      set(obj, _path, itemValue);
    });
  }

  return obj;
}
