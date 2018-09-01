/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IIndexedItem, IIndexedTableItem, IIndexedTableItemSubject } from './interfaces';

export function getItemRemoved(item: IIndexedTableItem): boolean {
  return item ? item._removed : false;
}

export function getItemPath(item: IIndexedItem | IIndexedTableItem): string | null {
  return item && item.path ? item.path : null;
}

export function getItemPathFromSubject(item: IIndexedTableItemSubject): string[] | null {
  return item && item.subject ? item.subject.getPath() : null;
}

export function getItemParentPath(item: IIndexedItem | IIndexedTableItem): string | null {
  return item && item.parent && item.parent.path ? item.parent.path : null;
}
