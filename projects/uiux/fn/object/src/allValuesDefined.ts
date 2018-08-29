import { isDefined, isEmpty, isPlainObject } from '@uiux/fn/common';

/**
 * @param object to evaluate
 */
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
      // object is empty
      return false;
    }
  } else {
    // not isPlainObject
    return false;
  }
}
