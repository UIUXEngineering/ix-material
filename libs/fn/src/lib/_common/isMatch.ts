import { baseIsMatch } from './_baseIsMatch';
import { getMatchData } from './_getMatchData';

/**
 * Performs a partial deep comparison between `_object` and `source` to
 * determine if `_object` contains equivalent property values.
 *
 * **Note:** This method is equivalent to `_.matches` when `source` is
 * partially applied.
 *
 * Partial comparisons will match empty _array and empty _object `source`
 * values against any _array or _object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @param object The _object to inspect.
 * @param source The _object of property values to match.
 * Returns `true` if `_object` is a match, else `false`.
 *
 * var _object = { 'a': 1, 'b': 2 };
 *
 * _.isMatch(_object, { 'b': 2 });
 * // => true
 *
 * _.isMatch(_object, { 'b': 1 });
 * // => false
 */
export function isMatch(object: any, source: any): boolean {
  return object === source || baseIsMatch(object, source, getMatchData(source));
}
