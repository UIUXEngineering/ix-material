import { isFunction } from './isFunction';
import { isLength } from './isLength';

/**
 * Checks if `value` is _array-like. A value is considered _array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * Returns `true` if `value` is _array-like, else `false`.
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 *
 * @param value
 */
export function isArrayLike(value: any): boolean {
  return value != null && isLength(value.length) && !isFunction(value);
}
