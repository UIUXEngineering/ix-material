import { baseGetAllKeys } from './_baseGetAllKeys';
import { getSymbols } from './_getSymbols';
import { keys } from './keys';

/**
 * Creates an _array of own enumerable property names and symbols of `_object`.
 *
 * @param object The _object to query.
 * Returns the _array of property names and symbols.
 */
export function getAllKeys(object: any): any[] {
  return baseGetAllKeys(object, keys, getSymbols);
}
