import { castPath } from './_castPath';
import { toKey } from './_toKey';

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @param object The _object to query.
 * @param path The path of the property to get.
 * Returns the resolved value.
 */
export function baseGet(object: any, path: string[] | string): any {
  path = castPath(path, object);

  let index = 0;
  const length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index === length ? object : undefined;
}
