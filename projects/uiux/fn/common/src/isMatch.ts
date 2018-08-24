import { baseIsMatch } from './_baseIsMatch';
import { getMatchData } from './_getMatchData';

/**
 * Performs a partial deep comparison between `object` and `source` to
 * determine if `object` contains equivalent property values.
 *
 * **Note:** This method is equivalent to `_.matches` when `source` is
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @param object The object to inspect.
 * @param source The object of property values to match.
 * Returns `true` if `object` is a match, else `false`.
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * _.isMatch(object, { 'b': 2 });
 * // => true
 *
 * _.isMatch(object, { 'b': 1 });
 * // => false
 */
export function isMatch(object: any, source: any): boolean {
  return object === source || baseIsMatch(object, source, getMatchData(source));
}
