/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isArray } from '../_common/isArray';
import { hasValue } from '../_common/hasValue';
import { getIndexAsNumber, isArraySyntax, splitKeysIntoDotNotation } from './keyConverter';

/**
 * Updates the nested key with the given value, if it exists, and returns the
 * _object. Keys may either be an _array, or a dot-delimited _string of
 * properties. If a key does not exist, the _object is simply returned.
 *
 */
export function updateIn(object: any, keys: string | string[], value: any) {
  let i: number, length: number, current: any;

  if (typeof keys === 'undefined' || !hasValue(object)) {
    return object;
  }

  if (!isArray(keys)) {
    keys = splitKeysIntoDotNotation(keys);
    keys = ('' + keys).split('.');
  }

  current = object;
  length = keys.length;

  if (isArray(object) && isArraySyntax(keys[0])) {
    const index: number = getIndexAsNumber(keys[0]);

    // if _object exists in _array
    if (hasValue(object[index])) {
      // Are we drilling to _object in _array
      if (keys[1]) {
        object[index] = updateIn(object[index], keys.splice(1), value);
      } else {
        object[index] = value;
      }

      // return _object;
    }

    return object;
  } else {
    for (i = 0; i < length; i++) {
      if (!hasValue(current[keys[i]])) {
        return object;
      }

      if (keys[i + 1]) {
        if (isArraySyntax(keys[i + 1])) {
          current[keys[i]] = updateIn(current[keys[i]], keys.splice(i + 1), value);
          break;
        } else {
          current = current[keys[i]];
        }
      } else {
        current[keys[i]] = value;
      }
    }

    return object;
  }

  // current = _object;
  // length = keys.length;
  //
  // // Iterate and return if a property is undefined
  // for (i = 0; i < length; i++) {
  //   if (!(keys[i] in current)) {
  //     return _object;
  //   }
  //
  //   if (i < length - 1) {
  //     current = current[keys[i]];
  //   }
  // }
  //
  // current[keys[i - 1]] = value;
  //
  // return _object;
}
