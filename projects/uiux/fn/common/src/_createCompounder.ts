import { arrayReduce } from './_arrayReduce';
import { deburr } from './deburr';
import { words } from './words';

/** Used to compose unicode capture groups. */
// tslint:disable-next-line
const rsApos = "['\u2019]";

/** Used to match apostrophes. */
const reApos: RegExp = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * Returns the new compounder function.
 *
 * @param callback callback The function to combine each word.
 */
export function createCompounder(callback: Function): Function {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}
