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
 * Returns the converted string.
 *
 * @param value The value to convert.
 */
export function objectToString(value: any): string {
  return nativeObjectToString.call(value);
}
