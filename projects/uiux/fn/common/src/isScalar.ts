/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isPlainObject } from './isPlainObject';
import { isNull } from './isNull';
import { isUndefined } from './isUndefined';
import { isFunction } from './isFunction';

export function isScalar(value: any): boolean {
  return (!isPlainObject(value) && !isFunction(value)) || isNull(value) || isUndefined(value);
}
