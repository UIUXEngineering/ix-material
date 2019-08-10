import { baseFor } from './_baseFor';
import { keys } from './keys';

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @param object The _object to iterate over.
 * @param iteratee The function invoked per iteration.
 * Returns `_object`.
 */
export function baseForOwn(object: any, iteratee: Function): any {
  return object && baseFor(object, iteratee, keys);
}
