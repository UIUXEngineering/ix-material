/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsAreTruthy } from './all-props-are-truthy';
import { default as hasIn } from 'lodash-es/hasIn';
import { default as get } from 'lodash-es/get';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 *
 */
export function allPropsAreTruthyIn(object: any, keys: string | string[]): boolean {
  if (hasIn(object, keys)) {
    const value: any = get(object, keys);
    return allPropsAreTruthy(value);
  }

  return false;
}
