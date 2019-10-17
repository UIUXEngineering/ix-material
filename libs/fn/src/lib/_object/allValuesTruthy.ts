/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isPlainObject } from '../_common/isPlainObject';
import { isEmpty } from '../_common/isEmpty';
import { isTruthy } from '../_common/isTruthy';

/**
 * @param object to evaluate
 */
export function allValuesTruthy(object: any): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      return Object.keys(object).reduce((_allPropsHaveValue: boolean, key: string) => {
        if (!_allPropsHaveValue) {
          return _allPropsHaveValue;
        }
        return isTruthy(object[key]);
      }, true);
    } else {
      // _object is empty
      return false;
    }
  } else {
    // not plain _object
    return false;
  }
}
