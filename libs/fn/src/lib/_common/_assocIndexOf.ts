import { eq } from './eq';

/**
 * Gets the index at which the `key` is found in `_array` of key-value pairs.
 *
 * Returns the index of the matched value, else `-1`.
 *
 * @param array The _array to inspect.
 * @param key The key to search for.
 */
export function assocIndexOf(array: any[], key: any): number {
  let length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
