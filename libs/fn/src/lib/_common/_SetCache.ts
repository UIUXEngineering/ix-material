import { MapCache } from './_MapCache';
import { setCacheAdd } from './_setCacheAdd';
import { setCacheHas } from './_setCacheHas';

/**
 *
 * Creates an _array cache _object to store unique values.
 *
 * @param values The values to cache.
 */
export function SetCache(values?: any[]): void {
  let index = -1;
  const length = values == null ? 0 : values.length;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
