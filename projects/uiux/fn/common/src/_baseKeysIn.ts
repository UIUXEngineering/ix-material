import { isObject } from './isObject';
import { isPrototype } from './_isPrototype';
import { nativeKeysIn } from './_nativeKeysIn';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @param object The object to query.
 * Returns the array of property names.
 */
export function baseKeysIn(object): any[] {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  const isProto = isPrototype(object),
    result = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (!(key === 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
  }
  return result;
}
