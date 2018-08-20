/**
 * The base implementation of `_.isNaN` without support for number objects.
 * @param value The value to check.
 */
export function baseIsNan(value) {
  return value !== value;
}
