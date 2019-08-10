/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasIn } from './hasIn';
import { getIn } from './getIn';
import { hasValue } from './hasValue';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * _array, or a dot-delimited _string of properties.
 *
 * @param object
 * @param keys
 *boolean
 */
export function hasValueIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return hasValue(value);
  }

  return false;
}
