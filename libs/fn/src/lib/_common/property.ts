import { baseProperty } from './_baseProperty';
import { basePropertyDeep } from './_basePropertyDeep';
import { isKey } from './_isKey';
import { toKey } from './_toKey';

/**
 * Creates a function that returns the value at `path` of a given _object.
 *
 * @param path {Array|string} path The path of the property to get.
 * Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
export function property(path: any[] | string): Function {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
