/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasValue } from '@uiux/cdk/value';
import { clone } from './clone';
import { getIn } from './getIn';
import { mergeWithoutArray } from './mergeWithoutArray';
import { setIn } from './setIn';

export function mergeIn(object: any, keys: string | string[] | null, value: any): any {
  if (!hasValue(keys)) {
    return mergeWithoutArray(clone(object), value);
  } else {
    const originalValue: any = getIn(object, keys);
    const newValue: any = mergeWithoutArray(originalValue, value);
    return setIn(clone(object), keys, newValue);
  }
}
