import { baseDifference } from './_baseDifference';
import { baseFlatten } from './_baseFlatten';
import { baseRest } from './_baseRest';
import { isArrayLikeObject } from './isArrayLikeObject';

/**
 * Creates an _array of `_array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first _array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new _array.
 *
 *
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param _array The _array to inspect.
 * @param [values] The values to exclude.
 * @returns Returns the new _array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.differenceObject([2, 1], [2, 3]);
 * // => [1]
 */
export const difference = baseRest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
