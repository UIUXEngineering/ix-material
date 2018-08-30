import { toNumber } from './toNumber';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0,
  MAX_INTEGER = 1.7976931348623157e308;

/**
 * Converts `value` to a finite number.
 *
 * @param value The value to convert.
 * Returns the converted number.
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
export function toFinite(value: any): number {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
