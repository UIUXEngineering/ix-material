import { baseGetTag } from './_baseGetTag';
import { isArray } from './isArray';

/** `Object#toString` result references. */
import { isObjectLike } from './isObjectLike';

const stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a string, else `false`.
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
