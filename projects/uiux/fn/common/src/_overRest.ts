import { apply } from './_apply';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @param func The function to apply a rest parameter to.
 * @param The start position of the rest parameter.
 * @param transform The rest array transform.
 * Returns the new function.
 */
export function overRest(func: Function, start: number, transform: Function): Function {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function() {
    const args = arguments;
    let index = -1;
    const length = nativeMax(args.length - start, 0),
      array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    const otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
