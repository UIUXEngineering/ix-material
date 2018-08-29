import { baseGetAllKeys } from './_baseGetAllKeys';
import { getSymbols } from './_getSymbols';
import { keys } from './keys';

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @param object The object to query.
 * Returns the array of property names and symbols.
 */
export function getAllKeys(object: any): any[] {
  return baseGetAllKeys(object, keys, getSymbols);
}
