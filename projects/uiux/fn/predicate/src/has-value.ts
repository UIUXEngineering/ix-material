/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { trim } from '@uiux/fn/string';
import { isBoolean } from './is-boolean';
import { isDate } from './is-date';
import { isEmpty } from './is-empty';
import { isFunction } from '@uiux/fn/internal';
import { isNumber } from './is-number';
import { isString } from './is-string';

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
