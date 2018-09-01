/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn, hasValue, isString } from '@uiux/fn/common';

export function valuesContainString(data: any, q: string, props: string[]): boolean {
  props = props && props.length ? props : [];
  q = q.toLowerCase();

  return props.reduce((_allPropsHaveValue: boolean, key: string) => {
    if (_allPropsHaveValue) {
      return _allPropsHaveValue;
    }
    let item: any = getIn(data, key);
    if (hasValue(item) && isString(item)) {
      item = item.toLowerCase();
      q = q.toLowerCase();
      if (item.indexOf(q) > -1) {
        return true;
      }
    }

    return _allPropsHaveValue;
  }, false);
}
