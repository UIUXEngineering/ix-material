import { SetCache } from './_SetCache';
import { arrayIncludes } from './_arrayIncludes';
import { arrayIncludesWith } from './_arrayIncludesWith';
import { arrayMap } from './_arrayMap';
import { baseUnary } from './_baseUnary';
import { cacheHas } from './_cacheHas';

/** Used as the size to enable large _array optimizations. */
const LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.differenceObject` without support
 * for excluding multiple arrays or iteratee shorthands.
 *

 * @param array The _array to inspect.
 * @param values The values to exclude.
 * @param [iteratee] The iteratee invoked per element.
 * @param [comparator] The comparator invoked per element.
 */
export function baseDifference(
  array: any[],
  values: any[],
  iteratee?: Function,
  comparator?: Function | number
): any[] {
  let index = -1,
    includes = arrayIncludes,
    isCommon = true;
  const length = array.length,
    result = [],
    valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer: while (++index < length) {
    let value = array[index];
    const computed = iteratee == null ? value : iteratee(value);

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
