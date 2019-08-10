/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn } from '../_common/getIn';
import { hasIn } from '../_common/hasIn';
import { isDefined } from '../_common/isDefined';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * _array, or a dot-delimited _string of properties.
 *
 * @param object
 * @param _string | _string[]
 * @returns boolean
 */
export function isDefinedIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return isDefined(value);
  }

  return false;
}
