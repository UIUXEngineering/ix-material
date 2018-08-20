/** Used for built-in method references. */
const funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
const funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 *
 * @param  func The function to convert.
 * @returns {string} Returns the source code.
 */
export function toSource(func: (arg: any) => any): string {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
