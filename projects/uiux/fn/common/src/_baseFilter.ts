import { baseEach } from './_baseEach';

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *

 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
export function baseFilter(collection: any[] | any, predicate: Function): any[] {
  const result = [];
  baseEach(collection, function(value, index, _collection) {
    if (predicate(value, index, _collection)) {
      result.push(value);
    }
  });
  return result;
}
