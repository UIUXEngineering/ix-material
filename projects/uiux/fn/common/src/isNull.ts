/**
 * Checks if `value` is `null`.
 *
 * Returns `true` if `value` is `null`, else `false`.
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 *
 * @param value Value to check
 */
export function isNull(value) {
  return value === null;
}
