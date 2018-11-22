/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasIn } from './hasIn';
import { getIn } from './getIn';
import { isTruthy } from './isTruthy';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 *
 * @param object
 * @param keys
 *boolean
 */
export function isTruthyIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return isTruthy(value);
  }

  return false;
}
