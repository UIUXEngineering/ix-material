import { baseGetTag } from '@uiux/fn/internal';

/** `Object#toString` result references. */
import { isObjectLike } from '@uiux/fn/internal';

const numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 *
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
export function isNumber(value: any): boolean {
  return (
    (!isNaN(value - parseFloat(value)) && typeof value === 'number') ||
    (isObjectLike(value) && baseGetTag(value) === numberTag)
  );
}
