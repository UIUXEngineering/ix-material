/**
 * Gets the value at `key` of `object`.
 *
 *
 * @param {Object} [object] The object to query.
 *  key The key of the property to get.
 * @returns {*} Returns the property value.
 */
export function getValue(object: any, key: string) {
  return object == null ? undefined : object[key];
}
