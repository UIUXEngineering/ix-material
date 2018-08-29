import { isObject } from './isObject';

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
export function isStrictComparable(value: any): boolean {
  return value === value && !isObject(value);
}
