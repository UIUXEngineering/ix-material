/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { propsWithNoValue } from './props-with-no-value';
import { hasValue } from './has-value';

export function mergePropsToNoValue(target: any, source: any, exclude?: string[]): any {
  const e: string[] = exclude ? exclude : [];
  const t: any = propsWithNoValue(target);
  const keys: string[] = Object.keys(t);
  const r: any = {};

  keys.forEach((key: any) => {
    if (e.indexOf(key) === -1) {
      if (hasValue(source[key])) {
        r[key] = source[key];
      }
    }
  });

  return r;
}
