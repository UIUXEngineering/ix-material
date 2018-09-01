import { baseValues } from './_baseValues';
import { keys } from './keys';

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @param object The object to query.
 * Returns the array of property values.
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
