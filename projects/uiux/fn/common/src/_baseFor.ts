import { createBaseFor } from './_createBaseFor';

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @param object The object to iterate over.
 * @param iteratee The function invoked per iteration.
 * @param keysFunc The function to get the keys of `object`.
 * Returns `object`.
 */
export let baseFor: any = createBaseFor();
