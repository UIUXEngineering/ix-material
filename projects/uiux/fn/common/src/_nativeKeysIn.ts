/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @param object The object to query.
 * Returns the array of property names.
 */
export function nativeKeysIn(object: any): any[] {
  const result = [];
  if (object != null) {
    for (const key in Object(object)) {
      if (object.hasOwnProperty(key)) {
        result.push(key);
      }
    }
  }
  return result;
}
