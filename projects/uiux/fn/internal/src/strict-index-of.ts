/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 *
 * @param  array The array to inspect.
 *  value The value to search for.
 * @param fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
export function strictIndexOf(array: any[], value: any, fromIndex: number): number {
  let index = fromIndex - 1;
  const length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
