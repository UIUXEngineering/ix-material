/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn, hasIn } from '@uiux/fn/common';
import { allValuesDefined } from './allValuesDefined';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 */
export function allValuesDefinedIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return allValuesDefined(value);
  }

  return false;
}
