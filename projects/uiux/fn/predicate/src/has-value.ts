/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isBoolean } from 'lodash-es/isBoolean';
import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isFunction } from 'lodash-es/isFunction';
import { default as isString } from 'lodash-es/isString';
import { default as isNumber } from 'lodash-es/isNumber';
import { default as trim } from 'lodash-es/trim';
import { default as isDate } from 'lodash-es/isDate';

export function hasValue(value: any): boolean {
  if (isDate(value)) {
    return value.toJSON().length > 0;
  } else if (isString(value)) {
    return !isEmpty(trim(value));
  } else if (isNumber(value)) {
    return true; // true for all numbers
  } else if (isBoolean(value)) {
    // Testing for value, not truthy
    return true;
  } else if (isFunction(value)) {
    // Testing for value, not truthy
    return true;
  } else {
    return !isEmpty(value);
  }
}
