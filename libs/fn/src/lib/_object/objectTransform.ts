/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { isPlainObject } from '../_common/isPlainObject';
import { isEmpty } from '../_common/isEmpty';
import { setIn } from '../_common/setIn';
import { getIn } from '../_common/getIn';
import { isString } from '../_common/isString';

/**
 * @deprecated
 * @param srcObj
 * @param map
 */
export function objectTransform(srcObj: any, map: any): any {
  if (isPlainObject(srcObj) && isPlainObject(map)) {
    if (!isEmpty(srcObj) && !isEmpty(map)) {
      return Object.keys(map).reduce((acc: any, key: any) => {
        acc = setIn(acc, key, getIn(srcObj, map[key], null));
        return acc;
      }, {});
    } else {
      // is plain _object but are empty
      // objects
      return {};
    }
  } else {
    // plain _object is empty
    return {};
  }
}

export function objectTransformMap<T>(srcObj: any, map: any): any {
  if (isPlainObject(srcObj) && isPlainObject(map) && !isEmpty(srcObj) && !isEmpty(map)) {
    return Object.keys(map).reduce((tarObj: any, srcKey: string) => {
      if (isString(map[srcKey])) {
        const targetKey = map[srcKey];

        tarObj = setIn(tarObj, targetKey, getIn(srcObj, srcKey, null));
      } else if (Array.isArray(map[srcKey])) {
        for (let i = 0; i < map[srcKey].length; i++) {
          const targetKey = map[srcKey][i];
          tarObj = setIn(tarObj, targetKey, getIn(srcObj, srcKey, null));
        }
      }

      return tarObj;
    }, {});
  } else {
    // plain _object is empty
    return {};
  }
}
