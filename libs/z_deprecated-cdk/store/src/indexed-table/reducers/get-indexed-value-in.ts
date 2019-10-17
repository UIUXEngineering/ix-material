/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { ternaryIn } from '@uiux/cdk/object';

export function getIndexedValueIn(object: any, table: any, hashKey: string, defaultValue: any = null): any {
  let path = '';
  if (table[hashKey] && table[hashKey].path) {
    path = table[hashKey].path;
  }

  return ternaryIn(object, path, defaultValue);
}
