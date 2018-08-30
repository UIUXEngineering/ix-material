import { shuffleSelf } from './_shuffleSelf';
import { values } from './values';

/**
 * The base implementation of `_.shuffle`.
 *
 * @param collection The collection to shuffle.
 * Returns the new shuffled array.
 */
export function baseShuffle(collection: any | any[]): any[] {
  return shuffleSelf(values(collection));
}
