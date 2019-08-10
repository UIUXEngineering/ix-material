/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIndexedValueIn } from './get-indexed-value-in';
import { createIndexDict } from './create-indexed-dict';

describe('getIndexedValueIn', () => {
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

  it('should create', () => {
    const createdHashTable: any = createIndexDict(test, {
      storeData: true,
      includeArray: true,
    });
    const hashValue = getIndexedValueIn(test, createdHashTable, 'artt1');
    expect(hashValue).toEqual(test.iii.ar1[0].artt1);
  });
});
