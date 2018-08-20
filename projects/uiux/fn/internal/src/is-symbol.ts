import { isObjectLike } from './is-object-like';
import { baseGetTag } from './base-get-tag';

/** `Object#toString` result references. */
const symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 *
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
export function isSymbol(value) {
  return typeof value === 'symbol' || (isObjectLike(value) && baseGetTag(value) === symbolTag);
}
