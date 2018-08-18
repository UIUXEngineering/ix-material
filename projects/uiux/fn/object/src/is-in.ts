/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as hasIn } from 'lodash-es/hasIn';

/**
 * Returns whether or not the nested property is defined. Keys may be an
 * array, or a dot-delimited string of properties.
 */
export function isIn(object: any, keys: string | string[]) {
  return hasIn(object, keys);
}

export { hasIn };
