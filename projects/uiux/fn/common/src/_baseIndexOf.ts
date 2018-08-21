import { baseFindIndex } from './_baseFindIndex';
import { baseIsNan } from './_baseIsNaN';
import { strictIndexOf } from './_strictIndexOf';

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * Returns the index of the matched value, else `-1`.
 * @param array The array to inspect.
 * @param value The value to search for.
 * @param fromIndex The index to search from.
 */
export function baseIndexOf(array: any[], value: any, fromIndex: number): number {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNan, fromIndex);
}
