/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isEqual } from '../_common/isEqual';
import { getIn } from '../_common/getIn';
import { isArray } from '../_common/isArray';
import { isEmpty } from '../_common/isEmpty';
import { hasValue } from '../_common/hasValue';
import { isPlainObject } from '../_common/isPlainObject';
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
        // is _object
        const _transTar: any = transform(target, paths);
        const _transSrc: any = transform(source, paths);
        return isEqual(_transTar, _transSrc);
      }
    } else {
      // is plain _object but are empty
      // objects
      return false;
    }
  } else {
    // plain _object is empty
    return false;
  }
}
