import { arrayPush } from './_arrayPush';
import { isFlattenable } from './_isFlattenable';

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *

 * @param array The array to flatten.
 * @param depth The maximum recursion depth.
 * @param [predicate=isFlattenable] The function invoked per iteration.
 * @param [isStrict] Restrict to values that pass `predicate` checks.
 * @param [result=[]] The initial result value.
 */
export function baseFlatten(
  array: any[],
  depth: number,
  predicate: any,
  isStrict: boolean,
  result?: any[]
): any[] {
  let index = -1;
  const length = array.length;

  predicate = predicate || (predicate = isFlattenable);
  result = result || (result = []);

  while (++index < length) {
    const value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
