import { assocIndexOf } from './_assocIndexOf';

/**
 * Gets the list cache value for `key`.
 *
 * @name get
 * @memberOf ListCache
 * @param key The key of the value to get.
 * Returns the entry value.
 */
export function listCacheGet(key: string): any {
  const data = this.__data__,
    index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}
