import { baseCreate } from './_baseCreate';
import { getPrototype } from './_getPrototype';
import { isPrototype } from './_isPrototype';

/**
 * Initializes an object clone.
 *
 * @param object The object to clone.
 * Returns the initialized clone.
 */
export function initCloneObject(object) {
  return typeof object.constructor === 'function' && !isPrototype(object)
    ? baseCreate(getPrototype(object))
    : {};
}
