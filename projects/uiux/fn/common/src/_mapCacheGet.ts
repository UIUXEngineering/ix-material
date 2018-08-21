import { getMapData } from './_getMapData';

/**
 * Gets the map value for `key`.
 *
 * @memberOf MapCache
 * @param key The key of the value to get.
 * Returns the entry value.
 */
export function mapCacheGet(key: string): any {
  return getMapData(this, key).get(key);
}
