/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IHashTable } from './interfaces';
import { getItemPath } from './get-item-prop';

export function tableItemPathMatchesPath(table: IHashTable, hashKey: string, path: string): boolean {
  return getItemPath(table[hashKey]) === path;
}
