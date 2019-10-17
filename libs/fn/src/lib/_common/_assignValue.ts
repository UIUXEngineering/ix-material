import { baseAssignValue } from './_baseAssignValue';
import { eq } from './eq';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `_object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @param object The _object to modify.
 * @param key The key of the property to assign.
 * @param value The value to assign.
 */
export function assignValue(object: any, key: string, value: any): void {
  const objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}
