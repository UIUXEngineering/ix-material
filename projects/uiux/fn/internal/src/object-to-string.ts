/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
const nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 *
 *  value The value to convert.
 * @returns {string} Returns the converted string.
 */
export function objectToString(value: any): string {
  return nativeObjectToString.call(value);
}
