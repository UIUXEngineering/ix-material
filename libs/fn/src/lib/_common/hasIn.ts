import { baseHasIn } from './_baseHasIn';
import { hasPath } from './_hasPath';

/**
 * Checks if `path` is a direct or inherited property of `_object`.
 *
 * @param object The _object to query.
 * @param path The path to check.
 * Returns `true` if `path` exists, else `false`.
 *
 * var _object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(_object, 'a');
 * // => true
 *
 * _.hasIn(_object, 'a.b');
 * // => true
 *
 * _.hasIn(_object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(_object, 'b');
 * // => false
 */
export function hasIn(object: any, path: string[] | string): boolean {
  return object != null && hasPath(object, path, baseHasIn);
}
