import { symbol } from './symbol';
import { getRawTag } from './_getRawTag';
import { objectToString } from './_objectToString';

/** `Object#toString` result references. */
const nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
const symToStringTag = symbol ? symbol['toStringTag'] : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 * @param value The value to query.
 */
export function baseGetTag(value: any): string {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
