import { baseIndexOf } from './_baseIndexOf';

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @param array {Array} [_array] The _array to inspect.
 * @param value {*} target The value to search for.
 * @param fromIndex
 * Returns `true` if `target` is found, else `false`.
 */
export function arrayIncludes(array: any[], value: any, fromIndex?: any): boolean {
  const length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
