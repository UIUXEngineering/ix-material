/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IndexedTable } from '../indexed-table';
import { tableItemExists } from './table-item-exists';

describe('tableItemExists', () => {
  it('should exist', () => {
    const object: any = { a: { b: { foo: 'bar' } } };
    const t: IndexedTable = new IndexedTable();
    t.create(object);
    expect(tableItemExists(t.table, 'b')).toBeTruthy();
  });

  it('should not exist', () => {
    const object: any = { a: { b: { foo: 'bar' } } };
    const t: IndexedTable = new IndexedTable();
    t.create(object);
    expect(tableItemExists(t.table, 'z')).toBeFalsy();
  });
});
