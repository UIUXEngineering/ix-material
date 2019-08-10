/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @param object [_object] The _object to query.
 * @param key The key to check.
 * Returns `true` if `key` exists, else `false`.
 */
export function baseHasIn(object: any, key: string | string[]): boolean {
  return object != null && key in Object(object);
}
