import { isStrictComparable } from './_isStrictComparable';
import { keys } from './keys';

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @param object The object to query.
 * Returns the match data of `object`.
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
