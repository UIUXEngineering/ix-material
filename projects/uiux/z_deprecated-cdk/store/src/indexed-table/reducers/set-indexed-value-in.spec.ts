/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { setIndexedValueIn } from './set-indexed-value-in';
import { getIndexedValueIn } from './get-indexed-value-in';
import { createIndexDict } from './create-indexed-dict';
import { IIndexTableResponse } from './interfaces';

describe('setIndexedValueIn', () => {
  let object: any;

  beforeEach(() => {
    object = {
      a: {
        b: {
          c: 'foo',
        },
        d: [
          {
            e: {
              f: 'bar',
            },
          },
        ],
      },
    };
  });

  afterEach(() => {
    object = null;
  });

  it('should set rebuild flag if path does not exist', () => {
    const indexedTable: any = createIndexDict(object, {
      storeData: true,
      includeArray: true,
    });

    const value: any = getIndexedValueIn(object, indexedTable, 'f');

    expect(value).toBe('bar');

    const result: IIndexTableResponse = setIndexedValueIn(object, indexedTable, 'g', 'baz');

    expect(result.rebuild).toBeTruthy();
    expect(result.value).toBe('baz');
  });

  it('should not set rebuild flag if path does not exist', () => {
    const indexedTable: any = createIndexDict(object, {
      storeData: true,
      includeArray: true,
    });

    const value: any = getIndexedValueIn(object, indexedTable, 'f');

    expect(value).toBe('bar');

    const result: IIndexTableResponse = setIndexedValueIn(object, indexedTable, 'f', 'baz');

    expect(result.rebuild).toBeFalsy();
    expect(result.value).toBe('baz');
  });

  it('should set value in object', () => {
    const indexedTable: any = createIndexDict(object, {
      storeData: true,
      includeArray: true,
    });

    let value: any = getIndexedValueIn(object, indexedTable, 'f');

    expect(value).toBe('bar');

    const result: IIndexTableResponse = setIndexedValueIn(object, indexedTable, 'f', 'baz');

    value = getIndexedValueIn(object, indexedTable, 'f');

    expect(value).toBe('baz');
    expect(result.value).toBe('baz');
    expect(result.hashKey).toBe('f');
    expect(result.object.a.d[0].e.f).toBe('baz');
    expect(result.table['f'].value).toBe('baz');
    expect(result.rebuild).toBeFalsy();
  });
});
