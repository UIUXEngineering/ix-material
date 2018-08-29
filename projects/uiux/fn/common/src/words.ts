import { asciiWords } from './_asciiWords';
import { hasUnicodeWord } from './_hasUnicodeWord';
import { toString } from './toString';
import { unicodeWords } from './_unicodeWords';

/**
 * Splits `string` into an array of its words.
 * Returns the words of `string`.
 * @param string [string=''] The string to inspect.
 * @param pattern {RegExp|string} [pattern] The pattern to match words.
 * @param guard {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
export function words(string: string, pattern?: RegExp | string, guard?: any): string[] {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
