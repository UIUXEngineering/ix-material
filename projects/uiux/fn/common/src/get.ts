import { baseGet } from './_baseGet';

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param object The object to query.
 * @param path of the property to get.
 * @param defaultValue The value returned for `undefined` resolved values.
 * Returns the resolved value.
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
export function get(object: any, path: string[] | string, defaultValue?: any): any {
  const result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
