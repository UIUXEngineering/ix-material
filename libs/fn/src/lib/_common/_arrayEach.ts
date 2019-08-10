/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @param [array] The _array to iterate over.
 * @param iteratee The function invoked per iteration.
 */
export function arrayEach(array: any[], iteratee: Function): any[] {
  let index = -1;
  const length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
