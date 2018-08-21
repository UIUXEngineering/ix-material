import { isArray } from './isArray';
import { isKey } from './_isKey';
import { stringToPath } from './_stringToPath';
import { toString } from './toString';

/**
 * Casts `value` to a path array if it's not one.
 *
 * @param value The value to inspect.
 * @param object The object to query keys on.
 * Returns the cast property path array.
 */
export function castPath(value: any, object: any): string[] {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
