/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { baseToString } from '@uiux/fn/internal';

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 *
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 *  value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
export function toString(value: any): string {
  return value == null ? '' : baseToString(value);
}

// import { hasValue } from '@uiux/cdk/value';
// import { default as isDate } from 'lodash-es/isDate';
//
// export function toString(value: any, defaultValue?: any): any {
//   if (isDate(value)) {
//     return value.toJSON();
//   } else if (value && hasValue(value) && value.toString) {
//     return value.toString();
//   } else {
//     if (defaultValue) {
//       return defaultValue;
//     } else {
//       return '';
//     }
//   }
// }
