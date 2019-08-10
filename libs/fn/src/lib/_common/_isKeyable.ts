/**
 * Checks if `value` is suitable for use as unique _object key.
 *
 * @param value The value to check.
 * Returns `true` if `value` is suitable, else `false`.
 */
export function isKeyable(value: any): boolean {
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean'
    ? value !== '__proto__'
    : value === null;
}
