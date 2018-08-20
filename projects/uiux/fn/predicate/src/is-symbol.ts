import { baseGetTag } from '@uiux/fn/internal';
import { isObjectLike } from './is-object-like';

/** `Object#toString` result references. */
const symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
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
