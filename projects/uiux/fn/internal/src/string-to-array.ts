import { asciiToArray } from './ascii-to-array';
import { hasUnicode } from './has-unicode';
import { unicodeToArray } from './unicode-to-array';

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
