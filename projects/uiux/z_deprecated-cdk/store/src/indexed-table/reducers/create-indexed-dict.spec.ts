/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { createIndexDict } from './create-indexed-dict';
import { default as isArray } from 'lodash-es/isArray';

describe('createIndexedArray', () => {
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

  it('should map object not including arrays', () => {
    const hash: any = createIndexDict(test, {
      storeData: true,
      includeArray: false,
    });

    // object has array as value
    expect(isArray(hash['ar1'].value)).toBe(true);

    // object inside of array not mapped
    expect(hash['artt2']).toBeUndefined();
  });

  it('should map object including arrays', () => {
    const hash: any = createIndexDict(test, {
      storeData: true,
      includeArray: true,
    });

    expect(hash['artt2'].path).toBe('iii.ar1[1].artt2');
    expect(hash['artt2'].hashKey).toBe('artt2');

    expect(hash['artt1'].path).toBe('iii.ar1[0].artt1');
  });
});
