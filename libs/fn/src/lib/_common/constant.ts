/**
 * Creates a function that returns `value`.
 *
 * @param value The value to return from the new function.
 * @returns Returns the new constant function.
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
export function constant(value: any): Function {
  return function() {
    return value;
  };
}
