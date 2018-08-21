/**
 * The base implementation of `_.unary` without support for storing metadata.
 * Returns the new capped function.
 *
 * @param func The function to cap arguments for.
 */
export function baseUnary(func: Function): Function {
  return function(value: any) {
    return func(value);
  };
}
