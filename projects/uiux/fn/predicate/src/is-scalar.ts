/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { default as isNull } from 'lodash-es/isNull';
import { default as isUndefined } from 'lodash-es/isUndefined';
import { default as isFunction } from 'lodash-es/isFunction';

export function isScalar(value: any): boolean {
  return (!isPlainObject(value) && !isFunction(value)) || isNull(value) || isUndefined(value);
}
