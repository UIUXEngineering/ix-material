/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @param array The _array to inspect.
 * @param predicate The function invoked per iteration.
 * @param fromIndex The index to search from.
 * @param fromRight Specify iterating from right to left.
 */
export function baseFindIndex(array: any[], predicate: Function, fromIndex: number, fromRight?: boolean): number {
  const length = array.length;
  let index: number = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
