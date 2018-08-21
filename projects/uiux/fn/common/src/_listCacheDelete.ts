import { assocIndexOf } from './_assocIndexOf';

/** Used for built-in method references. */
const arrayProto = Array.prototype;

/** Built-in value references. */
const splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @memberOf ListCache
 * @param key The key of the value to remove.
 * Returns `true` if the entry was removed, else `false`.
 */
export function listCacheDelete(key: string): boolean {
  const data = this.__data__,
    index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  const lastIndex = data.length - 1;
  if (index === lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
