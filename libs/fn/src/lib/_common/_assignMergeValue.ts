import { baseAssignValue } from './_baseAssignValue';
import { eq } from './eq';

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @param object The _object to modify.
 * @param key The key of the property to assign.
 * @param value The value to assign.
 */
export function assignMergeValue(object: any, key: string, value: any): any {
  if (
    (value !== undefined && !eq(object[key], value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value);
  }
}
