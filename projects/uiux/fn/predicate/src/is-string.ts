import { baseGetTag } from '@uiux/fn/internal';
import { isArray } from './is-array';
import { isObjectLike } from './is-object-like';

/** `Object#toString` result references. */
const stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
export function isString(value) {
  return (
    typeof value === 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) === stringTag)
  );
}
