/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isPlainObject, isEmpty, getIn, setIn } from '@uiux/fn/common';

export function transform(target: any, map: any): any {
  if (isPlainObject(target) && isPlainObject(map)) {
    if (!isEmpty(target) && !isEmpty(map)) {
      return Object.keys(map).reduce((acc: any, key: any) => {
        acc = setIn(acc, key, getIn(target, map[key], null));
        return acc;
      }, {});
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
