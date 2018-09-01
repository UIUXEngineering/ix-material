import { SetCache } from './_SetCache';
import { arrayIncludes } from './_arrayIncludes';
import { arrayIncludesWith } from './_arrayIncludesWith';
import { cacheHas } from './_cacheHas';
import { createSet } from './_createSet';
import { setToArray } from './_setToArray';

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @param array {Array} array The array to inspect.
 * @param iteratee {Function} [iteratee] The iteratee invoked per element.
 * @param comparator {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator: any): any[] {
  const length = array.length,
    result = [];
  let index = -1,
    includes = arrayIncludes,
    isCommon = true,
    seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    let value = array[index];
    const computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      let seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

export default baseUniq;
