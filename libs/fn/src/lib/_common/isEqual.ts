import { baseIsEqual } from './_baseIsEqual';

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, _array buffers, booleans,
 * _date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @param value The value to compare.
 * @param other The other value to compare.
 * Returns `true` if the values are equivalent, else `false`.
 *
 * var _object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(_object, other);
 * // => true
 *
 * _object === other;
 * // => false
 */
export function isEqual(value: any, other: any): boolean {
  return baseIsEqual(value, other);
}
