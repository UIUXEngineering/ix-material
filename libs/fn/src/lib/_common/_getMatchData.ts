import { isStrictComparable } from './_isStrictComparable';
import { keys } from './keys';

/**
 * Gets the property names, values, and compare flags of `_object`.
 *
 * @param object The _object to query.
 * Returns the match data of `_object`.
 */
export function getMatchData(object: any): any[] {
  const result = keys(object);
  let length = result.length;

  while (length--) {
    const key = result[length],
      value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
