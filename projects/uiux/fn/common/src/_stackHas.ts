/**
 * Checks if a stack value for `key` exists.
 *
 * @param key The key of the entry to check.
 * Returns `true` if an entry for `key` exists, else `false`.
 */
export function stackHas(key: string): boolean {
  return this.__data__.has(key);
}

