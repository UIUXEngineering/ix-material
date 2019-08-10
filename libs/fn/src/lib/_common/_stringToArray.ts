import { asciiToArray } from './_asciiToArray';
import { hasUnicode } from './_hasUnicode';
import { unicodeToArray } from './_unicodeToArray';

/**
 * Converts `_string` to an _array.
 *
 * Returns the converted _array.
 *
 * @param string The _string to convert.
 */
export function stringToArray(string: string): any[] {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
