import { getMapData } from './_getMapData';

/**
 * Checks if a map value for `key` exists.
 *
 * @memberOf MapCache
 * @param key The key of the entry to check.
 * Returns `true` if an entry for `key` exists, else `false`.
 */
export function mapCacheHas(key: string): boolean {
  return getMapData(this, key).has(key);
}
