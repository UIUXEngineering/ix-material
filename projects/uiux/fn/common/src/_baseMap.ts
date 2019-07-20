import { baseEach } from './_baseEach';
import { isArrayLike } from './isArrayLike';

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 */
export function baseMap(collection, iteratee) {
  let index = -1;
  const result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, _collection) {
    result[++index] = iteratee(value, key, _collection);
  });
  return result;
}
