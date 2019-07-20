import { baseEach } from './_baseEach';
import { isArrayLike } from './isArrayLike';

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @param collection The collection to iterate over.
 * @param iteratee The function invoked per iteration.
 */
export function baseMap(collection: any, iteratee: Function) {
  let index = -1;
  const result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, _collection) {
    result[++index] = iteratee(value, key, _collection);
  });
  return result;
}
