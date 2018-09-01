/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @param key The key of the property to get.
 * Returns the new accessor function.
 */
export function baseProperty(key: string): Function {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}
