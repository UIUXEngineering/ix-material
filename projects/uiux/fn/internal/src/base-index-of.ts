import { baseFindIndex } from './base-find-index';
import { baseIsNaN } from './base-is-nan';
import { strictIndexOf } from './strict-index-of';

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
export function baseIndexOf(array: any[], value: any, fromIndex: number): number {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}
