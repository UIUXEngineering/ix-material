/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isIn } from './is-in';
import { get } from './get-in';
import { hasValue } from './has-value';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 *
 * @param object
 * @param string | string[]
 * @returns boolean
 */
export function hasValueIn(object: any, keys: string | string[]): boolean {
  if (isIn(object, keys)) {
    const value: any = get(object, keys);
    return hasValue(value);
  }

  return false;
}
