/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { createIndexDict } from './create-indexed-dict';
import { IIndexedItem, IIndexedItemDict, IIndexedTableItem } from './interfaces';
import { createTableItem } from './create-table-item';
import { hasValue } from '@uiux/cdk/value';

describe('createTableItem', () => {
  it('should create item', () => {
    const object: any = { a: { b: { foo: 'bar' } } };
    const mockTable: any = {};
    const _dict: IIndexedItemDict = createIndexDict(object);
    const itemB: IIndexedItem = _dict['b'];
    itemB.search = ['searchB'];
    const tItem: IIndexedTableItem = createTableItem(mockTable, itemB);

    expect(tItem.hashKey).toBe('b');
    expect(tItem.path).toBe('a.b');
    expect(tItem.search).toEqual(['searchB']);
    expect(tItem.parent.hashKey).toBe('a');
    expect(tItem.parent.path).toBe('a');
    // expect(tItem.subject.getValue()).toEqual({foo: 'bar'});
    expect(hasValue(tItem['_createdAt'])).toBeTruthy();
    expect(hasValue(tItem['_updatedAt'])).toBeTruthy();
    expect(hasValue(tItem['_timestamp'])).toBeTruthy();
  });

  // it('should create item', () => {
  //   let object: any = {a: {b: {foo: 'bar'}}};
  //
  //   let _dict: IIndexedItemDict = createIndexDict(object);
  //   let itemB: IIndexedItem = _dict['b'];
  //   itemB.search = ['searchB'];
  //
  //   let _tableItemB: IIndexedTableItem = createTableItem({}, clone(itemB));
  //   _tableItemB.subject = new BehaviorSubject({foo: 'baz'});
  //
  //   let mockTable: any = {
  //     b: _tableItemB
  //   };
  //
  //   itemB.path = 'z';
  //   itemB.search = ['searchB', 'searchC'];
  //   itemB.parent = {
  //     hashKey: 'foo',
  //     path: 'bar'
  //   };
  //   itemB.value = {foo: 'baz'};
  //
  //   let tItem: IIndexedTableItem = createTableItem(mockTable, itemB);
  //
  //   expect(tItem.hashKey).toBe('b');
  //   expect(tItem.path).toBe('z');
  //   expect(tItem.search).toEqual(['searchB', 'searchC']);
  //   expect(tItem.parent.hashKey).toBe('foo');
  //   expect(tItem.parent.path).toBe('bar');
  //   expect(tItem.subject.getValue()).toEqual({foo: 'baz'});
  //   expect(tItem['_createdAt']).toEqual(_tableItemB['_createdAt']);
  //   expect(hasValue(tItem['_updatedAt'])).toBeTruthy();
  //   expect(hasValue(tItem['_timestamp'])).toBeTruthy();
  // });
});
