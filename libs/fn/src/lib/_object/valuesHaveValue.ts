/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '../_common/hasValue';
import { isEmpty } from '../_common/isEmpty';
import { isPlainObject } from '../_common/isPlainObject';


export function valuesHaveValue(object: any, keys?: string[]): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      if (keys && keys.length) {
        return keys.reduce((_allPropsHaveValue: boolean, key: string) => {
          if (!_allPropsHaveValue) {
            return _allPropsHaveValue;
          }
          return hasValue(object[key]);
        }, true);
      } else {
        // is plain _object but not keys provided
        // and _object is not empty
        return false;
      }
    } else {
      // plain _object is empty
      return false;
    }
  } else {
    return false;
  }
}
