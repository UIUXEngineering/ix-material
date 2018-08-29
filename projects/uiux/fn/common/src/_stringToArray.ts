import { asciiToArray } from './_asciiToArray';
import { hasUnicode } from './_hasUnicode';
import { unicodeToArray } from './_unicodeToArray';

/**
 * Converts `string` to an array.
 *
 * Returns the converted array.
 *
 * @param string The string to convert.
 */
export function stringToArray(string: string): any[] {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
