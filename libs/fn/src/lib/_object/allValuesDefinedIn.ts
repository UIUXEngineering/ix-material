/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasIn } from '../_common/hasIn';
import { getIn } from '../_common/getIn';
import { allValuesDefined } from './allValuesDefined';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * _array, or a dot-delimited _string of properties.
 */
export function allValuesDefinedIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = getIn(object, keys);
    return allValuesDefined(value);
  }

  return false;
}
