/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn, hasIn } from '@uiux/fn/common';
import { isDefined } from '@uiux/fn/common';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 *
 * @param object
 * @param string | string[]
 * @returns boolean
 */
export function isDefinedIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return isDefined(value);
  }

  return false;
}
