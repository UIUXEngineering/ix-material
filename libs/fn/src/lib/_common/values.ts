import { baseValues } from './_baseValues';
import { keys } from './keys';

/**
 * Creates an _array of the own enumerable _string keyed property values of `_object`.
 *
 * **Note:** Non-_object values are coerced to objects.
 *
 * @param object The _object to query.
 * Returns the _array of property values.
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
export function values(object: any): any[] {
  return object == null ? [] : baseValues(object, keys(object));
}
