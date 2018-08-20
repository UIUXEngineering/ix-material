import { isFunction } from '@uiux/fn/internal';
import { isLength } from '@uiux/fn/internal';

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 *
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
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
 */
export function isArrayLike(value: any): boolean {
  return value != null && isLength(value.length) && !isFunction(value);
}
