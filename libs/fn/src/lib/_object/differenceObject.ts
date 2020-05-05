/**
 * Deep diff between two _object, using lodash
 * @param  _object Object compared
 * @param  base   Object to compare with
 */
import { isObject } from '../_common/isObject';
import { isEqual } from '../_common/isEqual';
import { objectTransform } from './object-transform';

export function differenceObject(object: any, base: any): any {
  return objectTransform(object, function(result, value, key) {
    if (!isEqual(value, base[key])) {
      result[key] = isObject(value) && isObject(base[key]) ? differenceObject(value, base[key]) : value;
    }
  });
}
