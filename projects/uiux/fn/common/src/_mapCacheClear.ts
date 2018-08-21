import { Hash } from './_Hash';
import { ListCache } from './_ListCache';
import { Map } from './_Map';

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
export function mapCacheClear(): void {
  this.size = 0;
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash(),
  };
}
