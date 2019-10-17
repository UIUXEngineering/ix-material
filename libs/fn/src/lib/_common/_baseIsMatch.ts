import { Stack } from './_Stack';
import { baseIsEqual } from './_baseIsEqual';

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @param object The _object to inspect.
 * @param source The _object of property values to match.
 * @param matchData The property names, values, and compare flags to match.
 * @param customizer The function to customize comparisons.
 * Returns `true` if `_object` is a match, else `false`.
 */
export function baseIsMatch(object: any, source: any, matchData: any[], customizer?: Function): boolean {
  let index = matchData.length;
  const length = index,
    noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  let data;
  while (index--) {
    data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }

  let key;
  while (++index < length) {
    data = matchData[index];
    key = data[0];
    const objValue = object[key],
      srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      const stack = new Stack();
      let result;
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (
        !(result === undefined
          ? baseIsEqual(
              srcValue,
              objValue,
              // tslint:disable-next-line:no-bitwise
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
              customizer,
              stack
            )
          : result)
      ) {
        return false;
      }
    }
  }
  return true;
}
