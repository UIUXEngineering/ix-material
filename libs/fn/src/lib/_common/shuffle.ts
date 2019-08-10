import { arrayShuffle } from './_arrayShuffle';
import { baseShuffle } from './_baseShuffle';
import { isArray } from './isArray';

/**
 * Creates an _array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @param collection The collection to shuffle.
 * Returns the new shuffled _array.
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
export function shuffle(collection: any[] | any): any[] {
  const func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}
