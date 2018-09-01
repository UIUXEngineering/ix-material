/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as set } from 'lodash-es/set';
import { hasValue } from '@uiux/cdk/value';

/**
 * Sets the nested key to the provided value, creating objects for any
 * non-existent properties, and returns the supplied object. Keys may be
 * supplied an array, or a dot-delimited string of properties.
 */
export function setIn(object: any, keys: string | string[] | null, value: any): any {
  if (keys && hasValue(keys)) {
    return set(object, keys, value);
  } else {
    object = value;
    return object;
  }
}
