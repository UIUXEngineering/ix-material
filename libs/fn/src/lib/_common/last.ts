/**
 * Gets the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param array array The array to query.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
export function last(array): any {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
