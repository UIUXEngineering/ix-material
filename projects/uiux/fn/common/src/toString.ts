/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from './hasValue';
import { isDate } from './isDate';

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 *
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param value The value to convert.
 *
 * Returns the converted string.
 *
 * _.toString();
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
// export function toString(value: any): string {
//   return value == null ? '' : baseToString(value) === '[object Object]' ? value.toString() : '';
// }

// import { hasValue } from '@uiux/cdk/value';
// import { isDate } from './isDate';
//
export function toString(value: any, defaultValue?: any): any {
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
