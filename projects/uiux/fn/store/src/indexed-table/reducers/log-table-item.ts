/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IHashTable, IIndexedTableItemSubject } from './interfaces';

export function logTableItem(table: IHashTable, hashkey: string): void {
  const i: IIndexedTableItemSubject = table[hashkey];
  console.log('LOGGING TABLE ITEM:');
  console.log('    hashKey', i.hashKey);
  console.log('    parent.hashKey', i.parent.hashKey);
  console.log('    parent.path', i.parent.path);
  console.log('    parent._keyMap', i.parent._keyMap);
  console.log('    path', i.path);
  console.log('    search', i.search);
  console.log('    _keyMap?', i._keyMap);
  console.log('    _type', i._type);
  console.log('    _isScalar', i._isScalar);
  console.log('    object?', i.value);
  console.log('    _removed', i._removed);
  console.log('    subject', i.subject.getValue());
}
