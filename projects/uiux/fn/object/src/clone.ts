/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { default as isPlainObject } from 'lodash-es/isPlainObject';
import { hasValue } from '@uiux/fn/value';
import { fromJS } from 'immutable';

export function clone(obj: any): any {
  // return cloneDeep(obj);
  if (isPlainObject(obj) && hasValue(obj)) {
    // return JSON.parse(JSON.stringify(obj));
    return fromJS(obj).toJS();
  } else {
    return obj;
  }
}
