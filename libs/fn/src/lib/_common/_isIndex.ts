/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
const reIsUint: RegExp = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid _array-like index.
 *
 * @param value The value to check.
 * @param length [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * Returns `true` if `value` is a valid index, else `false`.
 */
export function isIndex(value: any, length?: number): boolean {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (type === 'number' || (type !== 'symbol' && reIsUint.test(value))) &&
    (value > -1 && value % 1 === 0 && value < length)
  );
}
