import { createBaseFor } from './_createBaseFor';

/**
 * The base implementation of `baseForOwn` which iterates over `_object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @param _object The _object to iterate over.
 * @param iteratee The function invoked per iteration.
 * @param keysFunc The function to get the keys of `_object`.
 * Returns `_object`.
 */
export let baseFor: any = createBaseFor();
