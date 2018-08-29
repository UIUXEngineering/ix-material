import { baseIsNative } from './_baseIsNative';
import { getValue } from './_getValue';

/**
 * Gets the native function at `key` of `object`.
 *
 *
 * @param object The object to query.
 *  key The key of the method to get.
 * Returns the function if it's native, else `undefined`.
 */
export function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
