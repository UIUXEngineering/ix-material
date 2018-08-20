import { baseGetTag } from '@uiux/fn/internal';
import { isObjectLike } from './is-object-like';

/** `Object#toString` result references. */
const boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
export function isBoolean(value: any): boolean {
  return (
    value === true || value === false || (isObjectLike(value) && baseGetTag(value) === boolTag)
  );
}
