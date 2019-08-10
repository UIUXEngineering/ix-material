import { arrayPush } from './_arrayPush';
import { isArray } from './isArray';

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `_object`.
 *
 * @param object The _object to query.
 * @param keysFunc The function to get the keys of `_object`.
 * @param symbolsFunc The function to get the symbols of `_object`.
 * Returns the _array of property names and symbols.
 */
export function baseGetAllKeys(object: any, keysFunc: Function, symbolsFunc: Function): any[] {
  const result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
