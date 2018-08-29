/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @param array The array to iterate over.
 * @param predicate The function invoked per iteration.
 * Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
export function arraySome(array: any[], predicate: Function): boolean {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
