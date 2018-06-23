/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isBoolean } from 'lodash-es/isBoolean';
import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isString } from 'lodash-es/isString';
import { default as isNumber } from 'lodash-es/isNumber';
import { default as trim } from 'lodash-es/trim';
import { hasValue } from './has-value';

export function isTruthy(value: any): boolean {
  if (hasValue(value)) {
    // Testing for Truthy
    if (isString(value)) {
      return value === '0' ? Boolean(parseInt(value, 10)) : !isEmpty(trim(value));
    } else if (isNumber(value)) {
      return Boolean(value); // true for all numbers
    } else if (isBoolean(value)) {
      // Testing for value, not truthy
      return value;
    } else {
      return !isEmpty(value);
    }
  }

  return false;
}
