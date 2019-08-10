import { toString } from './toString';

/** Used to generate unique IDs. */
let idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @category Util
 * @param [prefix=''] The value to prefix the ID with.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
export function uniqueId(prefix: string): string {
  const id = ++idCounter;
  return toString(prefix) + id;
}
