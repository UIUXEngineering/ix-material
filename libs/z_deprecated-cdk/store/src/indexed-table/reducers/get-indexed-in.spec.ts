/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { createIndexDict } from './create-indexed-dict';
import { getIndexedIn } from './get-indexed-in';
import { IIndexedItem } from './interfaces';

describe('getIndexedin', () => {
  let test: any;

  beforeEach(() => {
    test = {
      aaa: {
        a: false,
        b: false,
        s: 'foo',
      },
      bbb: {
        ccc: 'ccc',
        ddd: {
          eee: 'ee1',
          aaa: 'aaa',
          fff: 'fff',
          hhh: 'hh1',
        },
        ggg: 'ggg',
      },
      eee: 'ee2',
      iii: {
        jjj: 'jjj',
        kkk: {
          aaa: {
            c: false,
            b: false,
            s: 'foo',
          },
          mmm: 'mmm',
          nnn: {
            ppp: 'ppp',
            hhh: 'hh2',
            qqq: 'qqq',
            ttt: {
              a: true,
              b: false,
              s: 'foo',
            },
          },
          ooo: 'ooo',
        },
        lll: 'lll',
        ar1: [
          {
            artt1: {
              a: true,
              b: false,
              s: 'foo',
            },
          },
          {
            artt2: true,
            b: false,
            s: 'bar',
          },
        ],
        rrr: {
          aaa: {
            a: true,
            b: false,
            s: 'foo',
          },
        },
      },
    };
  });

  afterEach(() => {
    test = null;
  });

  it('should get indexed table object not including arrays', () => {
    const createdHashTable: any = createIndexDict(test, {
      storeData: true,
      includeArray: false,
    });
    const indexedItem: string = getIndexedIn(createdHashTable, 'artt1', 'does not exist');

    expect(indexedItem).toBe('does not exist');
  });

  it('should get indexed table object including arrays', () => {
    const createdHashTable: any = createIndexDict(test, {
      storeData: true,
      includeArray: true,
    });
    const indexedItem: IIndexedItem = getIndexedIn(createdHashTable, 'artt1');

    expect(indexedItem.hashKey).toEqual('artt1');
    expect(indexedItem.path).toEqual('iii.ar1[0].artt1');
    expect(indexedItem.value).toEqual(test.iii.ar1[0].artt1);
    expect(indexedItem.search).toEqual([]);
  });
});
