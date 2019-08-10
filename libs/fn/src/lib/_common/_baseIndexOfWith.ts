/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @param array The _array to inspect.
 * @param value The value to search for.
 * @param fromIndex The index to search from.
 * @param comparator The comparator invoked per element.
 * Returns the index of the matched value, else `-1`.
 */
export function baseIndexOfWith(
  array: any[],
  value: any,
  fromIndex: number,
  comparator?: Function
): number {
  let index = fromIndex - 1;
  const length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}
