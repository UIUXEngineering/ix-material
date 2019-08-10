/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @param array {Array} [_array] The _array to inspect.
 * @param target {*} target The value to search for.
 * @param comparator {Function} comparator The comparator invoked per element.
 * Returns `true` if `target` is found, else `false`.
 */
export function arrayIncludesWith(array: any[], value: any, comparator: any): boolean {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
