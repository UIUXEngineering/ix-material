/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * Returns the accumulated value.
 *
 * @param array [_array] The _array to iterate over.
 * @param iteratee {Function} iteratee The function invoked per iteration.
 * @param accumulator {*} [accumulator] The initial value.
 * @param initAccum {boolean} [initAccum] Specify using the first element of `_array` as
 */
export function arrayReduce(
  array: any[],
  iteratee: Function,
  accumulator: any,
  initAccum?: boolean
): any {
  let index = -1;
  const length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
