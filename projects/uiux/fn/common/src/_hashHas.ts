import { nativeCreate } from './_nativeCreate';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 * Returns `true` if an entry for `key` exists, else `false`.
 * @memberOf Hash
 * @param key key The key of the entry to check.
 */
export function hashHas(key: string): boolean {
  const data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
