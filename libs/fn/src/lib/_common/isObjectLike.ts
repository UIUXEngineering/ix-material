/**
 * Checks if `value` is _object-like. A value is _object-like if it's not `null`
 * and has a `typeof` result of "_object".
 *
 *
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 *
 * @param value
 */
export function isObjectLike(value) {
  return value != null && typeof value === 'object';
}
