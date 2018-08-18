/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn } from './get-in';

describe('getIn', () => {
  let object: any | null;

  beforeEach(() => {
    object = { foo: { bar: { baz: 'test' } } };
  });

  afterEach(() => {
    object = null;
  });

  // describe('at', () => {
  //   let atObject: any;
  //
  //   beforeEach(() => {
  //     atObject = { a: [{ b: { c: 3 } }, 4] };
  //   });
  //
  //   afterEach(() => {
  //     atObject = null;
  //   });
  //
  //   it('should create', () => {
  //     expect(getIn(atObject, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  //   });
  // });

  describe('getIn', function() {
    it('returns false for null object', function() {
      const object2: any = null;
      expect(getIn(object2, 'foo.bar')).toBeUndefined();
    });

    it('returns return null node', function() {
      const object2: any = {
        a: {
          b: {
            c: null,
          },
        },
      };
      expect(getIn(object2, 'a.b.c', null)).toBeNull();
    });

    it('returns null if value is null', function() {
      const object2: any = {
        a: {
          b: {
            c: null,
          },
        },
      };
      expect(getIn(object2, 'a.b.c', 'foo')).toBe('foo');
    });

    it('returns undefined if value is undefined', function() {
      const object2: any = {
        a: {
          b: {
            c: undefined,
          },
        },
      };
      expect(getIn(object2, 'a.b.c', 'foo')).toBe('foo');
    });

    it('returns false for undefined object', function() {
      const object2: any = undefined;
      expect(getIn(object2, 'foo.bar')).toEqual(object2);
    });
  });

  describe('key characters', () => {
    it('should get number keys', () => {
      const obj: any = {
        1: {
          2: {
            3: 'foo',
          },
        },
      };

      expect(getIn(obj, '1.2.3')).toBe('foo');
    });

    it('should get any character key', () => {
      const obj: any = {
        1: {
          2: {
            $: 'foo',
          },
        },
      };

      expect(getIn(obj, '1.2.$')).toBe('foo');
    });

    it('should get special character arrays', () => {
      const obj: any = {
        1: {
          2: {
            $123: [
              {
                a: 'foo',
              },
            ],
          },
        },
      };

      expect(getIn(obj, '1.2.$123[0].a')).toBe('foo');
    });

    it('should get special character arrays', () => {
      const obj: any = {
        1: {
          2: {
            '123$': [
              {
                a: 'foo',
              },
            ],
          },
        },
      };

      expect(getIn(obj, '1.2.123$[0].a')).toBe('foo');
    });
  });

  describe('arrays', () => {
    let arr: any[];

    beforeEach(() => {
      arr = [
        {
          // <-- array '[0]'
          d: {
            // <-- array '[0].d'
            e: 'foo', // <-- array '[0].d.e'
          },
        },
        {
          // <-- array '[1]'
          g: {
            // <-- array '[1].g'
            h: 'bar', // <-- array '[1].d.h'
          },
        },
        [
          {
            // <-- array '[2][0]'
            k: {
              l: 'baz',
            },
          },
          [
            {
              m: 'bum',
            },
          ],
        ],
      ];
    });

    afterEach(() => {
      arr = [];
    });

    it('should get array as when first object', () => {
      expect(getIn(arr, '[0]')).toEqual(arr[0]);
    });

    it('should not return index that does not exist', () => {
      expect(getIn(arr, '[10]', 'default')).toEqual('default');
    });

    it('should drill into array object', () => {
      expect(getIn(arr, '[0].d')).toEqual(arr[0].d);
    });

    it('should return nested objects starting from array', () => {
      expect(getIn(arr, '[0].d.e')).toEqual('foo');
    });

    it('should return false if nested objects starting from array do not exist', () => {
      expect(getIn(arr, '[0].g.h', 'default')).toEqual('default');
    });

    it('should drill into array object', () => {
      expect(getIn(arr, '[1].g.h')).toEqual(arr[1].g.h);
    });

    it('should drill into sub array', () => {
      expect(getIn(arr, '[2].[0]')).toEqual(arr[2][0]);
    });

    it('should drill into object of sub array', () => {
      expect(getIn(arr, '[2][0].k.l')).toEqual(arr[2][0].k.l);
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(getIn(arr, '[10][0].k.l', 'default')).toEqual('default');
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(getIn(arr, '[2][10].k.l', 'default')).toEqual('default');
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(getIn(arr, '[2][0].z.l', 'default')).toEqual('default');
    });
  });

  describe('drill down arrays', () => {
    let objectWithArray: any;

    beforeEach(() => {
      objectWithArray = {
        a: {
          b: {
            c: [
              {
                // <-- array 'a.b.c.[0]'
                d: {
                  // <-- array 'a.b.c.[0].d'
                  e: 'foo', // <-- array 'a.b.c.[0].d.e'
                },
              },
              {
                // <-- array 'a.b.c.[1]'
                g: {
                  // <-- array 'a.b.c.[1].g'
                  h: 'bar', // <-- array 'a.b.c.[1].d.h'
                },
              },
              [
                {
                  // <-- array 'a.b.c.[2][0]'
                  k: {
                    l: 'baz',
                  },
                },
              ],
            ],
          },
          i: {
            j: 'baz',
          },
        },
      };
    });

    afterEach(() => {
      objectWithArray = null;
    });

    it('should get in array', function() {
      expect(getIn(objectWithArray, 'a.b.c[0].d.e')).toEqual('foo');
    });

    it('should not accept non-integer index', function() {
      expect(getIn(objectWithArray, 'a.b.c[foo]', 'defaultValue')).toEqual('defaultValue');
    });

    it('should not accept string as index', function() {
      expect(getIn(objectWithArray, 'a.b.c[foo].d.e', 'defaultValue')).toEqual('defaultValue');
    });

    it('should evaluate array as false if index value does not exist', function() {
      expect(getIn(objectWithArray, 'a.b.c[3]')).toEqual(objectWithArray.a.b.c[3]);
    });

    it('should not accept a non-integer  notation to evaluate an array', function() {
      expect(getIn(objectWithArray, 'a.b.c.d.e', 'defaultValue')).toEqual('defaultValue');
    });

    it('should not accept a non-integer index notation to evaluate an array', function() {
      // prettier-ignore
      expect(getIn(objectWithArray, 'a.b.c[\'foo\']', 'defaultValue')).toEqual('defaultValue');
    });

    it('should not accept a non-integer index notation to evaluate an array', function() {
      expect(getIn(objectWithArray, 'a.b.c[d].d.e', 'defaultValue')).toEqual('defaultValue');
    });

    it('should drill into sub array', function() {
      expect(getIn(objectWithArray, 'a.b.c[2][0].k.l')).toEqual(objectWithArray.a.b.c[2][0].k.l);
    });

    it('should evaluate second index as true', function() {
      expect(getIn(objectWithArray, 'a.b.c[1]')).toEqual(objectWithArray.a.b.c[1]);
    });

    it('should evaluate array as true', function() {
      expect(getIn(objectWithArray, 'a.b.c[0]')).toEqual(objectWithArray.a.b.c[0]);
    });

    it('should return object if path is undefined', function() {
      const path = undefined;
      expect(getIn(objectWithArray, path)).toEqual(objectWithArray);
    });

    it('should return object if path is null', function() {
      expect(getIn(objectWithArray, null)).toEqual(objectWithArray);
    });

    it('should return default if path is undefined', function() {
      const path = undefined;
      const defaultValue: any = { a: 'b' };
      expect(getIn(objectWithArray, path, defaultValue)).toEqual(defaultValue);
    });

    it('should return default if path is null', function() {
      const defaultValue: any = { a: 'b' };
      expect(getIn(objectWithArray, null, defaultValue)).toEqual(defaultValue);
    });
  });
});
