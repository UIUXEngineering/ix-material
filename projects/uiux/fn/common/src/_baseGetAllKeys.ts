import { arrayPush } from './_arrayPush';
import { isArray } from './isArray';

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @param object The object to query.
 * @param keysFunc The function to get the keys of `object`.
 * @param symbolsFunc The function to get the symbols of `object`.
 * Returns the array of property names and symbols.
 */
export function baseGetAllKeys(object: any, keysFunc: Function, symbolsFunc: Function): any[] {
  const result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
