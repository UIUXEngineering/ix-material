/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isEmpty, isEqual, isArray, isPlainObject, hasValue, getIn } from '@uiux/fn/common';

import { transform } from './transform';

export function valuesEqualHash(target: any, source: any, paths: string[] | any): boolean {
  if (isPlainObject(target) && isPlainObject(source) && hasValue(paths)) {
    if (!isEmpty(target) && !isEmpty(source)) {
      if (isArray(paths)) {
        let _mappedPropsAreEqual = true;
        const length = paths.length;

        for (let i = 0; i < length; i++) {
          _mappedPropsAreEqual = getIn(target, paths[i]) === getIn(source, paths[i]);

          if (!_mappedPropsAreEqual) {
            break;
          }
        }
        return _mappedPropsAreEqual;
      } else {
        // is object
        const _transTar: any = transform(target, paths);
        const _transSrc: any = transform(source, paths);
        return isEqual(_transTar, _transSrc);
      }
    } else {
      // is plain object but are empty
      // objects
      return false;
    }
  } else {
    // plain object is empty
    return false;
  }
}
