/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isArray } from 'lodash-es/isArray';
import { hasValue } from '@uiux/cdk/value';
import { default as get } from 'lodash-es/get';
import { default as at } from 'lodash-es/at';
import { default as filter } from 'lodash-es/filter';
import { ternary } from './ternary';

/**
 * Returns the value at the nested property, if it exists. Keys may either be
 * an array, or a dot-delimited string of properties. If the value does not
 * exist, the function returns undefined, or the defaultValue if supplied.
 */
export function getIn(
  object: any,
  keys: string | string[] | null,
  defaultValue?: any
): any | any[] {
  let result: any | any[];

  if (keys && hasValue(keys)) {
    if (isArray(keys)) {
      result = at(object, [...keys], defaultValue);
      result = filter(result, (item: any) => {
        return hasValue(item);
      });
    } else {
      result = get(object, keys);
      if (defaultValue) {
        result = ternary(result, defaultValue);
      }
    }
  } else if (defaultValue) {
    object = defaultValue;
    return object;
  } else {
    return object;
  }

  return result;
}

export { get, at };
