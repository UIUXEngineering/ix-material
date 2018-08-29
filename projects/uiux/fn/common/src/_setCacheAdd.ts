/** Used to stand-in for `undefined` hash values. */
const HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @param value The value to cache.
 * Returns the cache instance.
 */
export function setCacheAdd(value: any): any {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
