import { baseFor } from './_baseFor';
import { castFunction } from './_castFunction';
import { keysIn } from './keysIn';

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @param object The object to iterate over.
 * @param iteratee [iteratee=_.identity] The function invoked per iteration.
 * Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
export function forIn(object: any, iteratee: Function): any {
  return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
}
