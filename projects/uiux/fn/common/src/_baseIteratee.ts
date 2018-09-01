import { baseMatches } from './_baseMatches';
import { baseMatchesProperty } from './_baseMatchesProperty';
import { identity } from './identity';
import { isArray } from './isArray';
import { property } from './property';

/**
 * The base implementation of `_.iteratee`.
 *
 * @param value {*} [value=_.identity] The value to convert to an iteratee.
 * Returns the iteratee.
 */
export function baseIteratee(...value: any[]): Function {
  value = value && value.length === 1 ? value.pop() : value;
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value === 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value === 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
