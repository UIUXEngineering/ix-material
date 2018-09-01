import { isArrayLike } from './isArrayLike';
import { isObjectLike } from './isObjectLike';

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @param value The value to check.
 * Returns `true` if `value` is an array-like object,
 *  else `false`.
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
export function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
