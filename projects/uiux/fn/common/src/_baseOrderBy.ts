import { arrayMap } from './_arrayMap';
import { baseIteratee } from './_baseIteratee';
import { baseMap } from './_baseMap';
import { baseSortBy } from './_baseSortBy';
import { baseUnary } from './_baseUnary';
import compareMultiple from './_compareMultiple';
import { identity } from './identity';

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 */
export function baseOrderBy(collection, iteratees, orders) {
  let index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  const result = baseMap(collection, function(value, key, _collection) {
    const criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
