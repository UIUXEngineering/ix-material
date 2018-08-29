import { isKeyable } from './_isKeyable';

/**
 * Gets the data for `map`.
 *
 * @param map The map to query.
 * @param key The reference key.
 * Returns the map data.
 */
export function getMapData(map: any, key: string): any {
  const data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
