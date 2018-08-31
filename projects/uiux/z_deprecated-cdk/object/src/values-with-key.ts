/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as _isPlainObject } from 'lodash-es/isPlainObject';
import { default as _forIn } from 'lodash-es/forIn';
import { hasValue } from '@uiux/cdk/value';
import { clone } from './clone';

export function valuesWithKey(obj: any, key: string): any[] {
  const _obj: any = clone(obj);
  const data: any[] = [];
  if (_isPlainObject(_obj) && hasValue(_obj) && hasValue(key)) {
    _forIn(obj, (_value: any, _key: string) => {
      if (_isPlainObject(_value)) {
        _value[key] = _key;
        data.push(_value);
      }
    });
  } else {
    _forIn(obj, (_value: any) => {
      data.push(_value);
    });
  }

  return data;
}
