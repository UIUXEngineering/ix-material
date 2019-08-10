/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { default as isFunction } from 'lodash-es/isFunction';
import { default as isString } from 'lodash-es/isString';
import { default as get } from 'lodash-es/get';
import { hasValue } from '@uiux/cdk/value';

export function allPropsHaveValue(
  object: any,
  keyOrFn?: string | Function,
  fn?: Function,
  context?: any
): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      const keys: string[] = Object.keys(object);
      if (keys && keys.length) {
        let _allPropsHaveValue = true;
        const length = keys.length;

        for (let i = 0; i < length; i++) {
          const _key: string = keys[i];
          const _value: any = object[_key];

          if (keyOrFn && isString(keyOrFn) && isFunction(fn)) {
            const _tmpValue: any = get(_value, keyOrFn);
            // comparator function
            _allPropsHaveValue = fn.call(context || null, _tmpValue);
          } else if (keyOrFn && isString(keyOrFn)) {
            _allPropsHaveValue = hasValue(get(_value, keyOrFn));
          } else if (keyOrFn && isFunction(keyOrFn)) {
            _allPropsHaveValue = hasValue(keyOrFn.call(context || null, _value));
          } else {
            _allPropsHaveValue = hasValue(_value);
          }

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
