import { nativeCreate } from './_nativeCreate';

/** Used to stand-in for `undefined` hash values. */
const HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 * Returns the hash instance.
 * @memberOf Hash
 * @param key The key of the value to set.
 * @param value The value to set.
 */
export function hashSet(key: string, value: any): any {
  const data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
