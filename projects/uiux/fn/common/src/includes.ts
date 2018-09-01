import { baseIndexOf } from './_baseIndexOf';
import { isArrayLike } from './isArrayLike';
import { isString } from './isString';
import { toInteger } from './toInteger';
import { values } from './values';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @param collection The collection to inspect.
 * @param value The value to search for.
 * @param fromIndex [fromIndex=0] The index to search from.
 * @param guard [guard] Enables use as an iteratee for methods like `_.reduce`.
 * Returns `true` if `value` is found, else `false`.
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
export function includes(
  collection: any[] | any | string,
  value: any,
  fromIndex?: number,
  guard?: any
): boolean {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;

  const length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1
    : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
