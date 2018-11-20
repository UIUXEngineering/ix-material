import { isEqual, isObject, transform } from '@uiux/fn/common';

/**
 * Deep diff between two object, using lodash
 * @param  object Object compared
 * @param  base   Object to compare with
 */
export function difference(object: any, base: any): any {
  return transform(object, function(result, value, key) {
    if (!isEqual(value, base[key])) {
      result[key] = isObject(value) && isObject(base[key]) ? difference(value, base[key]) : value;
    }
  }, {});
}
