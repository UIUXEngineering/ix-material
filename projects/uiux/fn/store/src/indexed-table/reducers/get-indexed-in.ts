/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IIndexedItemDict } from './interfaces';
import { ternary } from '@uiux/fn/object';

export function getIndexedIn(
  table: IIndexedItemDict,
  hashKey: string,
  defaultValue: any = null
): any {
  return ternary(table[hashKey], defaultValue);
}
