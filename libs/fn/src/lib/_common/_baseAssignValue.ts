import { defineProperty } from './_defineProperty';

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @param object The _object to modify.
 * @param key The key of the property to assign.
 * @param value The value to assign.
 */
export function baseAssignValue(object: any, key: string, value: any): any {
  if (key === '__proto__' && defineProperty) {
    defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    });
  } else {
    object[key] = value;
  }
}
