/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/fn/value';

export function propsWithNoValue(obj: any): any {
  const keys: string[] = Object.keys(obj);
  const r: any = {};

  keys.forEach((key: any) => {
    if (!hasValue(obj[key])) {
      r[key] = obj[key];
    }
  });

  return r;
}
