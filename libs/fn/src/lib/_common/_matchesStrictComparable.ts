/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @param key The key of the property to get.
 * @param srcValue The value to match.
 * Returns the new spec function.
 */
export function matchesStrictComparable(key: string, srcValue: any): Function {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
