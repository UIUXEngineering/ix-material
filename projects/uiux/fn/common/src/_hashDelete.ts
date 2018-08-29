/**
 * Removes `key` and its value from the hash.
 *
 * Returns `true` if the entry was removed, else `false`.
 *
 * @memberOf Hash
 * @param objecthash The hash to modify.
 * @param key The key of the value to remove.
 */
export function hashDelete(key: string): boolean {
  const result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
