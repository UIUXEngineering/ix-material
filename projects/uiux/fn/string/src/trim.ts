/** Used to match leading and trailing whitespace. */
import { baseToString } from '@uiux/fn/internal';
import { castSlice } from '@uiux/fn/internal';
import { charsEndIndex } from '@uiux/fn/internal';
import { charsStartIndex } from '@uiux/fn/internal';
import { stringToArray } from '@uiux/fn/internal';
import { toString } from './to-string';

const reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 *
 * @memberOf _
 * @since 3.0.0
 * @category String
 *  [string=''] The string to trim.
 *  [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string: string, chars: string, guard: any): string {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  const strSymbols = stringToArray(string),
    chrSymbols = stringToArray(chars),
    start = charsStartIndex(strSymbols, chrSymbols),
    end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

export default trim;
