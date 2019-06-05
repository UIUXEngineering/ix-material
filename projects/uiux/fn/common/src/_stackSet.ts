import { ListCache } from './_ListCache';
import { Map } from './_Map';
import { MapCache } from './_MapCache';

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @param key The key of the value to set.
 * @param value The value to set.
 * Returns the stack cache instance.
 */
export function stackSet(key: string, value: any): any {
  let data = this.__data__;
  if (data instanceof ListCache) {
    const pairs = (<any>data).__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++(<any>data).size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
