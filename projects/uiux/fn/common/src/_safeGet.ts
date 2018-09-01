/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @param object The object to query.
 * @param key The key of the property to get.
 * Returns the property value.
 */
export function safeGet(object: any, key: string): any {
  return key === '__proto__' ? undefined : object[key];
}
