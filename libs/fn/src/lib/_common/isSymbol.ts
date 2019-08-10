import { isObjectLike } from './isObjectLike';
import { baseGetTag } from './_baseGetTag';

/** `Object#toString` result references. */
const symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or _object.
 *
 *
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 * @param value
 */
export function isSymbol(value: any): boolean {
  return typeof value === 'symbol' || (isObjectLike(value) && baseGetTag(value) === symbolTag);
}
