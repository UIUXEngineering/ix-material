/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isIn } from './is-in';

describe('Hoops', () => {
  let object: any | null;

  beforeEach(() => {
    object = { foo: { bar: { baz: 'test' } } };
  });

  afterEach(() => {
    object = null;
  });

  describe('isIn', function() {
    it('returns true if the keys exist', function() {
      let keys, i, res;

      keys = [['foo'], ['foo', 'bar'], ['foo', 'bar', 'baz']];

      for (i = 0; i < keys.length; i++) {
        res = isIn(object, keys[i]);
        expect(res).toEqual(true);
      }
    });

    it('returns false if the keys do not exist', function() {
      let keys, i, res;

      keys = [['bar'], ['foo', 'invalid'], ['foo', 'bar', 'invalid']];

      for (i = 0; i < keys.length; i++) {
        res = isIn(object, keys[i]);
        expect(res).toEqual(false);
      }
    });

    it('accepts dot delimited strings for keys', function() {
      let keys, i, res;

      keys = ['foo', 'foo.bar', 'foo.bar.baz'];

      for (i = 0; i < keys.length; i++) {
        res = isIn(object, keys[i]);
        expect(res).toEqual(true);
      }
    });

    it('returns false for null object', function() {
      const object2: any = null;
      expect(isIn(object2, 'foo.bar')).toEqual(false);
    });

    it('returns false for null object', function() {
      object = { foo: null };
      expect(isIn(object, 'foo.bar')).toEqual(false);
    });

    it('returns false for undefined object', function() {
      const object2: any = undefined;
      expect(isIn(object2, 'foo.bar')).toEqual(false);
    });
  });

  describe('array', () => {
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

    it('should know if is array', () => {
      expect(isIn(arr, '[0]')).toBeTruthy();
    });

    it('should not return index that does not exist', () => {
      expect(isIn(arr, '[10]')).toBeFalsy();
    });

    it('should drill into array object', () => {
      expect(isIn(arr, '[0].d')).toBeTruthy();
    });

    it('should return nested objects starting from array', () => {
      expect(isIn(arr, '[0].d.e')).toBeTruthy();
    });

    it('should return false if nested objects starting from array do not exist', () => {
      expect(isIn(arr, '[0].g.h')).toBeFalsy();
    });

    it('should drill into array object', () => {
      expect(isIn(arr, '[1].g.h')).toBeTruthy();
    });

    it('should drill into sub array', () => {
      expect(isIn(arr, '[2][0]')).toBeTruthy();
    });

    it('should drill into object of sub array', () => {
      expect(isIn(arr, '[2][0].k.l')).toBeTruthy();
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(isIn(arr, '[10][0].k.l')).toBeFalsy();
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(isIn(arr, '[2][10].k.l')).toBeFalsy();
    });

    it('should not drill into object of sub array if path does not exist', () => {
      expect(isIn(arr, '[2][0].z.l')).toBeFalsy();
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
      expect(isIn(objectWithArray, 'a.b.c[0].d.e')).toEqual(true);
    });

    it('should not accept non-integer index', function() {
      expect(isIn(objectWithArray, 'a.b.c[foo]')).toEqual(false);
    });

    it('should not accept string as index', function() {
      expect(isIn(objectWithArray, 'a.b.c[foo].d.e')).toEqual(false);
    });

    it('should evaluate array as false if index value does not exist', function() {
      expect(isIn(objectWithArray, 'a.b.c[3]')).toEqual(false);
    });

    it('should not accept a non-integer  notation to evaluate an array', function() {
      expect(isIn(objectWithArray, 'a.b.c.d.e')).toEqual(false);
    });

    it('should not accept a non-integer index notation to evaluate an array', function() {
      // prettier-ignore
      expect(isIn(objectWithArray, 'a.b.c[\'foo\']')).toEqual(false);
    });

    it('should not accept a non-integer index notation to evaluate an array', function() {
      expect(isIn(objectWithArray, 'a.b.c[d].d.e')).toEqual(false);
    });

    it('should drill into sub array', function() {
      expect(isIn(objectWithArray, 'a.b.c.[2][0].k.l')).toEqual(true);
    });

    it('should evaluate second index as true', function() {
      expect(isIn(objectWithArray, 'a.b.c[1]')).toEqual(true);
    });

    it('should evaluate array as true', function() {
      expect(isIn(objectWithArray, 'a.b.c[0]')).toEqual(true);
    });
  });
});
