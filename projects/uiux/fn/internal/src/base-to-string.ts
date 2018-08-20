import { symbol } from './symbol';
import { arrayMap } from './array-map';
import { isSymbol } from './is-symbol';
import { isArray } from './is-array';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
const symbolProto = symbol ? symbol['prototype'] : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 * Returns the string.
 *
 * @param value The value to process.
 */
export function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  const result = value + '';
  return result === '0' && 1 / value === -INFINITY ? '-0' : result;
}
