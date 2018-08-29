/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @param array array to iterate over.
 * @param predicate The function invoked per iteration.
 * Returns the new filtered array.
 */
export function arrayFilter(array: any[], predicate: Function): any[] {
  let index = -1;
  const length = array == null ? 0 : array.length;
  let resIndex = 0;
  const result = [];

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
