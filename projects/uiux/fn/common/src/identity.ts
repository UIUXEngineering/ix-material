/**
 * This method returns the first argument it receives.
 *
 * @param value Any value.
 * @returns Returns `value`.
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
export function identity(value: any): any {
  return value;
}
