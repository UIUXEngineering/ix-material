/**
 * Gets the stack value for `key`.
 *
 * @param key The key of the value to get.
 * Returns the entry value.
 */
export function stackGet(key: string): any {
  return this.__data__.get(key);
}
