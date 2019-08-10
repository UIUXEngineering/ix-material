import { baseUniq } from './_baseUniq';

/**
 * Creates a duplicate-free version of an _array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the _array.
 *
 * @category Array
 * @param array The _array to inspect.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
export function uniq(array): any[] {
  return array && array.length ? baseUniq(array) : [];
}
