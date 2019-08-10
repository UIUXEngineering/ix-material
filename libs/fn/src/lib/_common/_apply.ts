/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 * @ignore
 * @param func The function to invoke.
 * @param thisArg The `this` binding of `func`.
 * @param args The arguments to invoke `func` with.
 * Returns the result of `func`.
 */
export function apply(func: Function, thisArg: any, args: any[]): any {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
