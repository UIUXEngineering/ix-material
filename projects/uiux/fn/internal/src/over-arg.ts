/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 *
 * @param  func The function to wrap.
 * @param  transform The argument transform.
 * @returns  Returns the new function.
 */
function overArg(func: (arg: any) => any, transform: (arg: any) => any): (arg: any) => any {
  return function(arg: any) {
    return func(transform(arg));
  };
}

export default overArg;
