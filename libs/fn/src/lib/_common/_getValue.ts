/**
 * Gets the value at `key` of `_object`.
 *
 * Returns the property value.
 *
 * @param object The _object to query.
 *  key The key of the property to get.
 */
export function getValue(object: any, key: string) {
  return object == null ? undefined : object[key];
}
