/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 * Returns the new accessor function.
 *
 * @param object The _object to query.
 */
export function basePropertyOf(object: { [key: string]: any }): (substring: string) => string {
  return function(key: string): string | null {
    return object == null ? undefined : object[key];
  };
}
