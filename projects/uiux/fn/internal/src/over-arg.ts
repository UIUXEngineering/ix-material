/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func: (arg: any) => any, transform: (arg: any) => any): (arg: any) => any {
  return function(arg: any) {
    return func(transform(arg));
  };
}

export default overArg;
