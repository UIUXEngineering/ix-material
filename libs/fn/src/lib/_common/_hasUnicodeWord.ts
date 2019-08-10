/** Used to detect strings that need a more robust regexp to match words. */
// tslint:disable-next-line
const reHasUnicodeWord: RegExp = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `_string` contains a word composed of Unicode symbols.
 *
 * Returns `true` if a word is found, else `false`.
 *
 * @param string _string The _string to inspect.
 */
export function hasUnicodeWord(string: string): boolean {
  return reHasUnicodeWord.test(string);
}
