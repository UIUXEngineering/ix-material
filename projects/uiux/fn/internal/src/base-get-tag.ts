import { symbol } from './symbol';
import { getRawTag } from './get-raw-tag';
import { objectToString } from './object-to-string';

/** `Object#toString` result references. */
const nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
const symToStringTag = symbol ? symbol['toStringTag'] : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 *
 *  value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
export function baseGetTag(value: any): string {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value)
    ? getRawTag(value)
    : objectToString(value);
}
