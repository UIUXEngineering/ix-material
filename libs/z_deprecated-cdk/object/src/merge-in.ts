/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasValue } from '@uiux/cdk/value';
import { clone } from './clone';
import { getIn } from './get-in';
import { merge } from './merge';
import { setIn } from './set-in';

export function mergeIn(object: any, keys: string | string[] | null, value: any): any {
  if (!hasValue(keys)) {
    return merge(clone(object), value);
  } else {
    const originalValue: any = getIn(object, keys);
    const newValue: any = merge(originalValue, value);
    return setIn(clone(object), keys, newValue);
  }
}
