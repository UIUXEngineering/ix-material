/** Used to match leading and trailing whitespace. */
import { baseToString } from './_baseToString';
import { castSlice } from './_castSlice';
import { charsEndIndex } from './_charsEndIndex';
import { charsStartIndex } from './_charsStartIndex';
import { stringToArray } from './_stringToArray';
import { toString } from './toString';

const reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `_string`.
 *
 *
 * @param string [_string=''] The _string to trim.
 * @param chars [chars=whitespace] The characters to trim.
 * @param guard Enables use as an iteratee for methods like `_.map`.
 * Returns the trimmed _string.
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
export function trim(string: string, chars?: string, guard?: any): string {
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
