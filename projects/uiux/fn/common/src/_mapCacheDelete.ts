import { getMapData } from './_getMapData';

/**
 * Removes `key` and its value from the map.
 *
 * @memberOf MapCache
 * @param key The key of the value to remove.
 * Returns `true` if the entry was removed, else `false`.
 */
export function mapCacheDelete(key: string): boolean {
  const result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
