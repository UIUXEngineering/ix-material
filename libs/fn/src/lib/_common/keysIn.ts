import { arrayLikeKeys } from './_arrayLikeKeys';
import { baseKeysIn } from './_baseKeysIn';
import { isArrayLike } from './isArrayLike';

/**
 * Creates an _array of the own and inherited enumerable property names of `_object`.
 *
 * **Note:** Non-_object values are coerced to objects.
 *
 * @param object The _object to query.
 * @returns Returns the _array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
export function keysIn(object: any): any[] {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
