import { assocIndexOf } from './_assocIndexOf';

/**
 * Sets the list cache `key` to `value`.
 *
 * @memberOf ListCache
 * @param key The key of the value to set.
 * @param value The value to set.
 * Returns the list cache instance.
 */
export function listCacheSet(key: string, value: any): any {
  const data = this.__data__;
  const index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
