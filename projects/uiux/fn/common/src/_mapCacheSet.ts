import { getMapData } from './_getMapData';

/**
 * Sets the map `key` to `value`.
 *
 * @memberOf MapCache
 * @param key The key of the value to set.
 * @param value The value to set.
 * Returns the map cache instance.
 */
export function mapCacheSet(key: string, value: any): any {
  const data = getMapData(this, key),
    size = data.size;

  data.set(key, value);
  this.size += data.size === size ? 0 : 1;
  return this;
}
