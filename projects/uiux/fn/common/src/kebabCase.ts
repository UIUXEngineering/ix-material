import { createCompounder } from './_createCompounder';

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * Returns Function: the kebab cased string.
 *
 * @param string {string} [string=''] The string to convert.
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
