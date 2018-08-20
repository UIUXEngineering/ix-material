/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 *
 * @param  func The function to cap arguments for.
 * @returns  Returns the new capped function.
 */
export function baseUnary(func: Function): Function {
  return function(value: any) {
    return func(value);
  };
}
