/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isEqual } from 'lodash-es/isEqual';
import { default as isArray } from 'lodash-es/isArray';
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { hasValue } from '@uiux/cdk/value';
import { default as get } from 'lodash-es/get';
import { transform } from './transform';

export function propsAreEqual(target: any, source: any, paths: string[] | any): boolean {
  if (isPlainObject(target) && isPlainObject(source) && hasValue(paths)) {
    if (!isEmpty(target) && !isEmpty(source)) {
      if (isArray(paths)) {
        let _mappedPropsAreEqual = true;
        const length = paths.length;

        for (let i = 0; i < length; i++) {
          _mappedPropsAreEqual = get(target, paths[i]) === get(source, paths[i]);

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
