import { listCacheClear } from './_listCacheClear';
import { listCacheDelete } from './_listCacheDelete';
import { listCacheGet } from './_listCacheGet';
import { listCacheHas } from './_listCacheHas';
import { listCacheSet } from './_listCacheSet';

/**
 * Creates an list cache object.
 *
 * @param entries The key-value pairs to cache.
 */
export function ListCache(entries: any[]): void {
  let index = -1;
  const length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
