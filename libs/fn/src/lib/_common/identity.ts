/**
 * This method returns the first argument it receives.
 *
 * @param value Any value.
 * @returns Returns `value`.
 *
 * var _object = { 'a': 1 };
 *
 * console.log(_.identity(_object) === _object);
 * // => true
 */
export function identity(value: any): any {
  return value;
}
