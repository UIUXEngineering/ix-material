/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IHashTable } from './interfaces';
import { hasValue } from '@uiux/cdk/object';

export function tableItemExists(table: IHashTable, hashKey: string): boolean {
  return hasValue(table[hashKey]);
}
