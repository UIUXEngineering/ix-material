import { arrayEach } from './_arrayEach';
import { baseCreate } from './_baseCreate';
import { baseForOwn } from './_baseForOwn';
import { baseIteratee } from './_baseIteratee';
import { getPrototype } from './_getPrototype';
import { isArray } from './isArray';
import { isBuffer } from './isBuffer';
import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { isTypedArray } from './isTypedArray';

/**
 * An alternative to `_.reduce`; this method transforms `_object` to a new
 * `accumulator` _object which is the result of running each of its own
 * enumerable _string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` _object. If `accumulator` is not
 * provided, a new _object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, _object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 *
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param object The _object to iterate over.
 * @param [iteratee=_.identity] The function invoked per iteration.
 * @param [accumulator] The custom accumulator value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
export function transform(object: any, iteratee: Function, accumulator?: any): any {
  const isArr = isArray(object),
    isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator === null || accumulator === undefined) {
    const Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, _object) {
    return iteratee(accumulator, value, index, _object);
  });
  return accumulator;
}
