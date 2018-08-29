import { baseHasIn } from './_baseHasIn';
import { hasPath } from './_hasPath';

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @param object The object to query.
 * @param path The path to check.
 * Returns `true` if `path` exists, else `false`.
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
export function hasIn(object: any, path: string[] | string): boolean {
  return object != null && hasPath(object, path, baseHasIn);
}
