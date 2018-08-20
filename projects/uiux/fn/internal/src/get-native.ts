import { baseIsNative } from './base-is-native';
import { getValue } from './get-value';

/**
 * Gets the native function at `key` of `object`.
 *
 *
 * @param {Object} object The object to query.
 *  key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
export function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
