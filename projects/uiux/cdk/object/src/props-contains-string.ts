/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { default as isString } from 'lodash-es/isString';
import { hasValue } from './has-value';
import { default as get } from 'lodash-es/get';

export function propsContainsString(data: any, q: string, props: string[]): boolean {
  let i = 0;
  const len = props.length;
  let anyPropContainsQuery = false;
  for (i; i < len; i++) {
    const prop: string = props[i];
    let item: any = get(data, prop);

    if (hasValue(item) && isString(item)) {
      item = item.toLowerCase();
      q = q.toLowerCase();
      if (item.indexOf(q) > -1) {
        anyPropContainsQuery = true;
        break;
      }
    }
  }
  return anyPropContainsQuery;
}
