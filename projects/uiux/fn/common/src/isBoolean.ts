import { baseGetTag } from './_baseGetTag';
import { isObjectLike } from './isObjectLike';

/** `Object#toString` result references. */

const boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 *
 * @param value
 * Returns `true` if `value` is a boolean, else `false`.
 */
export function isBoolean(value: any): boolean {
  return (
    value === true || value === false || (isObjectLike(value) && baseGetTag(value) === boolTag)
  );
}
