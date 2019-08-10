/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { isPlainObject } from '../_common/isPlainObject';
import { isEmpty } from '../_common/isEmpty';
import { hasValue } from '../_common/hasValue';


export function keysHaveValue(value: any, keys?: string[]): boolean {
  if (isPlainObject(value)) {
    if (!isEmpty(value)) {
      if (keys && keys.length) {
        let allPropsHaveValue = true;
        const length = keys.length;

        for (let i = 0; i < length; i++) {
          const _key: string = keys[i];
          const _value: any = value[_key];

          allPropsHaveValue = hasValue(_value);

          if (!allPropsHaveValue) {
            break;
          }
        }

        return allPropsHaveValue;
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
