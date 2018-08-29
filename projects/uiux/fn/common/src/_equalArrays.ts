import { SetCache } from './_SetCache';
import { arraySome } from './_arraySome';
import { cacheHas } from './_cacheHas';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @param array The array to compare.
 * @param other The other array to compare.
 * @param bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param customizer The function to customize comparisons.
 * @param equalFunc The function to determine equivalents of values.
 * @param stack Tracks traversed `array` and `other` objects.
 * Returns `true` if the arrays are equivalent, else `false`.
 */
export function equalArrays(
  array: any[],
  other: any[],
  bitmask: number,
  customizer: Function,
  equalFunc: Function,
  stack: any
): boolean {
  // tslint:disable-next-line
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;

  if (arrLength !== othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  const stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked === other;
  }
  let index = -1,
    result = true,
    // tslint:disable-next-line
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    const arrValue = array[index],
      othValue = other[index];

    let compared;
    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (
        !arraySome(other, function(_othValue, othIndex) {
          if (
            !cacheHas(seen, othIndex) &&
            (arrValue === _othValue || equalFunc(arrValue, _othValue, bitmask, customizer, stack))
          ) {
            return seen.push(othIndex);
          }
        })
      ) {
        result = false;
        break;
      }
    } else if (
      !(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))
    ) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
