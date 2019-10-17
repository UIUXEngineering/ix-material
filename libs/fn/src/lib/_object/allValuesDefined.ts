/**
 * @param object to evaluate
 */
import { isDefined } from '../_common/isDefined';
import { isEmpty } from '../_common/isEmpty';
import { isPlainObject } from '../_common/isPlainObject';

export function allValuesDefined(object: any): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      return Object.keys(object).reduce((_allValuesDefined: boolean, key: string) => {
        if (!_allValuesDefined) {
          return _allValuesDefined;
        }
        return isDefined(object[key]);
      }, true);
    } else {
      // _object is empty
      return false;
    }
  } else {
    // not isPlainObject
    return false;
  }
}
