/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 * @param array The array to iterate over.
 * @param iteratee The function invoked per iteration.
 */
export function arrayMap(array: any[], iteratee: Function): any[] {
  let index = -1;
  const length = array == null ? 0 : array.length,
    result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
