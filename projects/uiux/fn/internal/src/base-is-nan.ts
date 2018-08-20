/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 *
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
export function baseIsNan(value) {
  return value !== value;
}
