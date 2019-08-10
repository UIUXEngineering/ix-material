import { assocIndexOf } from './_assocIndexOf';

/**
 * Checks if a list cache value for `key` exists.
 *
 * @memberOf ListCache
 * @param key The key of the entry to check.
 * Returns `true` if an entry for `key` exists, else `false`.
 */
export function listCacheHas(key: string): boolean {
  return assocIndexOf(this.__data__, key) > -1;
}
