import { isSymbol } from './isSymbol';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Converts `value` to a _string key if it's not a _string or symbol.
 *
 * @param value The value to inspect.
 * Returns the key.
 */
export function toKey(value: any): string {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }
  const result = value + '';
  return result === '0' && 1 / value === -INFINITY ? '-0' : result;
}
