/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isPlainObject } from '../_common/isPlainObject';
import { isEmpty } from '../_common/isEmpty';
import { hasValue } from '../_common/hasValue';

/**
 * @param object to evaluate
 */
export function allValuesHasValue(object: any): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      return Object.keys(object).reduce((_allPropsHaveValue: boolean, key: string) => {
        if (!_allPropsHaveValue) {
          return _allPropsHaveValue;
        }
        return hasValue(object[key]);
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
