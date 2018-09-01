/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeFloor = Math.floor,
  nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @param lower The lower bound.
 * @param upper The upper bound.
 * Returns the random number.
 */
export function baseRandom(lower: number, upper: number): number {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}
