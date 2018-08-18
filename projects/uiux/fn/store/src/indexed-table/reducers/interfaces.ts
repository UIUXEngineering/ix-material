/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { ImmutableHashSubject } from '../immutable-hash-subject';

export interface IIndexedItem {
  hashKey: string;
  parent: {
    hashKey: string;
    path: string;
    _keyMap?: string;
  };
  path: string;
  search: string[];
  _keyMap?: string;
  _type: string | null;
  _isScalar: boolean | null;
  // TODO underline
  value?: any;
}

export interface IIndexedItemDict {
  [hashKey: string]: IIndexedItem;
}

export interface IIndexedTableItem extends IIndexedItem {
  _removed: boolean;
}

export interface IIndexedTableItemSubject extends IIndexedTableItem {
  subject: ImmutableHashSubject<any>;
}

export interface IHashTable {
  [hashKey: string]: IIndexedTableItemSubject;
}

export interface IIndexTableResponse {
  hashKey: string;
  object: any;
  value: any;
  table: IIndexedItemDict;
  rebuild: boolean;
}

export interface ICreateIndexDictConfig {
  storeData?: boolean;
  includeArray?: boolean;
  pathAsKey?: boolean;
  _keyMap?: any | null;
}
