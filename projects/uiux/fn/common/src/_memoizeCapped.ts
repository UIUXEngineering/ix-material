import { memoize } from './memoize';

/** Used as the maximum memoize cache size. */
const MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @param func The function to have its output memoized.
 * Returns the new memoized function.
 */
export function memoizeCapped(func: Function): () => any {
  let cache: any;
  const result: any = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  cache = result.cache;
  return result;
}
