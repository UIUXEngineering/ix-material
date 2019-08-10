import { castPath } from './_castPath';
import { isIndex } from './_isIndex';
import { toKey } from './_toKey';
import { isArguments } from './isArguments';
import { isArray } from './isArray';
import { isLength } from './isLength';

/**
 * Checks if `path` exists on `_object`.
 *
 * @param object The _object to query.
 * @param path The path to check.
 * @param hasFunc The function to check properties.
 * Returns `true` if `path` exists, else `false`.
 */
export function hasPath(object: any, path: string[] | string, hasFunc: Function): boolean {
  path = castPath(path, object);

  let index = -1;
  let length = path.length;
  let result = false;
  let key: string;

  while (++index < length) {
    key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index !== length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return (
    !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object))
  );
}

export default hasPath;
