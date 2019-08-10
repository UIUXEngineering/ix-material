import { baseForOwn } from './_baseForOwn';
import { createBaseEach } from './_createBaseEach';

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @param collection {Array|Object} collection The collection to iterate over.
 * @param iteratee {Function} iteratee The function invoked per iteration.
 * Returns `collection`.
 */
export let baseEach: any | any[] = createBaseEach(baseForOwn);
