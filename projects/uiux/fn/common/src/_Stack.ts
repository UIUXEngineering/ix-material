import {ListCache} from './_ListCache';
import {stackClear} from './_stackClear';
import {stackDelete} from './_stackDelete';
import {stackGet} from './_stackGet';
import {stackHas} from './_stackHas';
import {stackSet} from './_stackSet';

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @param entries The key-value pairs to cache.
 */
export function Stack(entries: any[]): void {
  const data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
