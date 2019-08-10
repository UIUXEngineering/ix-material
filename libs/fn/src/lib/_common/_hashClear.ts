import { nativeCreate } from './_nativeCreate';

/**
 * Removes all key-value entries from the hash.
 * @memberOf Hash
 */
export function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
