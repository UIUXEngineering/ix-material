import { createCompounder } from './_createCompounder';

/**
 * Converts `_string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Returns Function: the kebab cased _string.
 *
 * @param _string {string} [_string=''] The _string to convert.
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
export const kebabCase = createCompounder(function(
  result: string,
  word: string,
  index: number
): string {
  return result + (index ? '-' : '') + word.toLowerCase();
});
