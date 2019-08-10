/**
 * Checks if `value` is in the _array cache.
 *
 * @param value The value to search for.
 * Returns `true` if `value` is found, else `false`.
 */
export function setCacheHas(value: any): number {
  return this.__data__.has(value);
}
