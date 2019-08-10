/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * Returns the new function.
 *
 * @param func The function to wrap.
 * @param transform The argument transform.
 */
export function overArg(func: (arg: any) => any, transform: (arg: any) => any): (arg: any) => any {
  return function(arg: any) {
    return func(transform(arg));
  };
}
