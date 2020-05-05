/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { isPlainObject } from '../_common/isPlainObject';
import { isEmpty } from '../_common/isEmpty';
import { setIn } from '../_common/setIn';
import { getIn } from '../_common/getIn';

export function objectTransform(target: any, map: any): any {
  if (isPlainObject(target) && isPlainObject(map)) {
    if (!isEmpty(target) && !isEmpty(map)) {
      return Object.keys(map).reduce((acc: any, key: any) => {
        acc = setIn(acc, key, getIn(target, map[key], null));
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
