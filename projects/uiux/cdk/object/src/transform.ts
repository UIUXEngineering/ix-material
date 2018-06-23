/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isEmpty } from 'lodash-es/isEmpty';
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { default as get } from 'lodash-es/get';
import { default as set } from 'lodash-es/set';

export function transform(target: any, map: any): any {
  if (isPlainObject(target) && isPlainObject(map)) {
    if (!isEmpty(target) && !isEmpty(map)) {
      const r: any = Object.keys(map).reduce((acc: any, key: any) => {
        acc = set(acc, key, get(target, map[key], null));
        return acc;
      }, {});
      return r;
    } else {
      // is plain object but are empty
      // objects
      return {};
    }
  } else {
    // plain object is empty
    return {};
  }
}
