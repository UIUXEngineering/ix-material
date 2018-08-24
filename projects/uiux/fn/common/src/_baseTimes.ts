/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @param n The number of times to invoke `iteratee`.
 * @param iteratee The function invoked per iteration.
 * Returns the array of results.
 */
export function baseTimes(n: number, iteratee: Function): any[] {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
