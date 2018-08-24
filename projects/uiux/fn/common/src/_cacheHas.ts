/**
 * Checks if a `cache` value for `key` exists.
 *
 * @param cache The cache to query.
 * @param key The key of the entry to check.
 * Returns `true` if an entry for `key` exists, else `false`.
 */
export function cacheHas(cache: any, key: string): boolean {
  return cache.has(key);
}

