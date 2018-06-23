/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { isTruthy } from './is-truthy';

export function allPropsAreTruthy(value: any): boolean {
  if (isPlainObject(value)) {
    const keys: string[] = Object.keys(value);

    if (!isEmpty(value)) {
      if (keys && keys.length) {
        let _allPropsHaveValue = true;
        const length = keys.length;

        for (let i = 0; i < length; i++) {
          const _key: string = keys[i];
          const _value: any = value[_key];

          _allPropsHaveValue = isTruthy(_value);

          if (!_allPropsHaveValue) {
            break;
          }
        }

        return _allPropsHaveValue;
      } else {
        // is plain object but not keys provided
        // and object is not empty
        return false;
      }
    } else {
      // plain object is empty
      return false;
    }
  } else {
    return false;
  }
}
