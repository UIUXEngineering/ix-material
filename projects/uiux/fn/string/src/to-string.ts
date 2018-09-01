/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/fn/common';
import { isDate } from '@uiux/fn/common';

/**
 *
 * @param value
 * @param defaultValue
 */
export function toString(value: any, defaultValue?: any): string {
  if (isDate(value)) {
    return value.toJSON();
  } else if (value && hasValue(value) && value.toString) {
    return value.toString();
  } else {
    if (defaultValue) {
      return defaultValue;
    } else {
      return '';
    }
  }
}
