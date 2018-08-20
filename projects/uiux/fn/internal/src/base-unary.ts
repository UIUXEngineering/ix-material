/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
export function baseUnary(func: Function): Function {
  return function(value: any) {
    return func(value);
  };
}
