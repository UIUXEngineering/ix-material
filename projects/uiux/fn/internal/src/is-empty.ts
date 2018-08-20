import { baseKeys } from './base-keys';
import { getTag } from './get-tag';
import { isArguments } from './is-arguments';
import { isArray } from './is-array';
import { isArrayLike } from './is-arrayLike';
import { isBuffer } from './is-buffer';
import { isPrototype } from './is-prototype';
import { isTypedArray } from './is-typed-array';
/** `Object#toString` result references. */

const mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @param value The value to check.
 * Returns `true` if `value` is empty, else `false`.
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
export function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (
    isArrayLike(value) &&
    (isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !value.length;
  }
  const tag = getTag(value);
  if (tag === mapTag || tag === setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

export default isEmpty;
