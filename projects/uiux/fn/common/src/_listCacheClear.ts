/**
 * Removes all key-value entries from the list cache.
 *
 * @memberOf ListCache
 */
export function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
