import { asciiToArray } from './ascii-to-array';
import { hasUnicode } from './has-unicode';
import { unicodeToArray } from './unicode-to-array';

/**
 * Converts `string` to an array.
 *
 *
 *  string The string to convert.
 * @returns  Returns the converted array.
 */
export function stringToArray(string: string): any[] {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
