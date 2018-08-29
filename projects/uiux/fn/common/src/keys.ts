import { arrayLikeKeys } from './_arrayLikeKeys';
import { baseKeys } from './_baseKeys';
import { isArrayLike } from './isArrayLike';

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @param object The object to query.
 * Returns the array of property names.
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
export function keys(object: any): any[] {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
