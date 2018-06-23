/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { isTruthy } from './is-truthy';

export function propsAreTruthy(value: any, keys?: string[]): boolean {
  if (isPlainObject(value)) {
    if (!isEmpty(value)) {
      if (keys && keys.length) {
        let allPropsHaveValue = true;
        const length = keys.length;

        for (let i = 0; i < length; i++) {
          const _key: string = keys[i];
          const _value: any = value[_key];

          allPropsHaveValue = isTruthy(_value);

          if (!allPropsHaveValue) {
            break;
          }
        }

        return allPropsHaveValue;
      } else {
        // is plain object but not keys provided
        // and object is not empty
        return true;
      }
    } else {
      // plain object is empty
      return false;
    }
  } else {
    return !isEmpty(value);
  }
}
