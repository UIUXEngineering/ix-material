/** Used to match words composed of alphanumeric characters. */
const reAsciiWord: RegExp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * Returns the words of `string`.
 *
 * @param string The string to inspect.
 */
export function asciiWords(string: string): string[] {
  return string.match(reAsciiWord) || [];
}
