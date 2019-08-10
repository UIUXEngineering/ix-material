/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasValue } from '@uiux/cdk/value';
import { clone } from './clone';
import { propsWithNoValue } from './props-with-no-value';

export function mergePropsIfNoValue(target: any, source: any, exclude?: string[]): any {
  const e: string[] = exclude ? exclude : [];

  // get only the properties that have no value
  // from the target object
  const t: any = propsWithNoValue(target);
  const keys: string[] = Object.keys(t);

  // make target immutable
  const r: any = clone(target);

  keys.forEach((key: any) => {
    if (e.indexOf(key) === -1) {
      if (hasValue(source[key])) {
        r[key] = source[key];
      }
    }
  });

  return r;
}
