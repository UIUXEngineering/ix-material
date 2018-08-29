/**
 * Checks if `value` is `undefined`.
 *
 * Returns `true` if `value` is `undefined`, else `false`.
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 *
 * @param value Value to check.
 */
export function isUndefined(value) {
  return value === undefined;
}
