import { arrayFilter } from './_arrayFilter';
import { baseFilter } from './_baseFilter';
import { baseIteratee } from './_baseIteratee';
import { isArray } from './isArray';

/**
 * Iterates over elements of `collection`, returning an _array of all elements
 * `_predicate` returns truthy for. The _predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new _array.
 *
 * @param collection {Array|Object} collection The collection to iterate over.
 * @param predicate {Function} [_predicate=_.identity] The function invoked per iteration.
 * Returns the new filtered _array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
export function filter(collection: any[] | any, predicate: Function): any[] {
  const func = isArray(collection) ? arrayFilter : baseFilter;
  // tslint:disable-next-line
  return func(collection, baseIteratee(predicate, 3));
}
