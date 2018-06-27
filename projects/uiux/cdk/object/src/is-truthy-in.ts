/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isIn } from './is-in';
import { getIn } from './get-in';
import { hasValue } from '@uiux/cdk/value';
import { isTruthy } from './is-truthy';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 *
 */
export function isTruthyIn(object: any, keys: string | string[]): boolean {
  if (isIn(object, keys)) {
    const value: any = getIn(object, keys);
    if (hasValue(value)) {
      return isTruthy(value);
    }
  }

  return false;
}
