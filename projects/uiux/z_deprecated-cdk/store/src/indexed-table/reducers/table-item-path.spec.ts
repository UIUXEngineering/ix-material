/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { IndexedTable } from '../indexed-table';
import { tableItemPathMatchesPath } from './table-item-path-matches';

describe('tableItemPath', () => {
  it('should match path', () => {
    const object: any = { a: { b: { foo: 'bar' } } };
    const t: IndexedTable = new IndexedTable();
    t.create(object);
    expect(tableItemPathMatchesPath(t.table, 'z', 'a.b.c')).toBeFalsy();
  });

  it('should match path', () => {
    const object: any = { a: { b: { foo: 'bar' } } };
    const t: IndexedTable = new IndexedTable();
    t.create(object);
    expect(tableItemPathMatchesPath(t.table, 'foo', 'a.b.foo')).toBeTruthy();
  });
});
