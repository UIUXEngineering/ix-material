/**
 * Gets the value at `key` of `object`.
 *
 * Returns the property value.
 *
 * @param object The object to query.
 *  key The key of the property to get.
 */
export function getValue(object: any, key: string) {
  return object == null ? undefined : object[key];
}
