/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allValuesDefined } from './allValuesDefined';

describe('allValuesDefined', () => {
  describe('object with multiple props', () => {
    it('should return true for _object with false value', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for _object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(allValuesDefined(obj)).toBe(false);
    });

    it('should return false for _object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(allValuesDefined(obj)).toBe(false);
    });

    it('should return false for _object with empty _array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return true for _object with filled _array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for _object with empty _string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for all props defined with empty _string and _array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for all props defined and empty _object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for null prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: null,
      };
      expect(allValuesDefined(obj)).toBe(false);
    });

    it('should return false for undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: undefined,
      };
      expect(allValuesDefined(obj)).toBe(false);
    });
  });

  describe('object', () => {
    it('should return false for empty _object value', () => {
      expect(allValuesDefined({})).toBe(false);
    });

    it('should return false for empty _object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for _object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allValuesDefined(obj)).toBe(true);
    });

    it('should return false for _object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allValuesDefined(obj)).toBe(true);
    });
  });

  describe('empty value', () => {
    it('should return false for empty _object value', () => {
      expect(allValuesDefined({})).toBe(false);
    });

    it('should return false for null value', () => {
      expect(allValuesDefined(null)).toBe(false);
    });

    it('should return false for undefined value', () => {
      expect(allValuesDefined(undefined)).toBe(false);
    });

    it('should return false for empty _string value', () => {
      expect(allValuesDefined('')).toBe(false);
    });

    it('should return false for empty _string value', () => {
      expect(allValuesDefined([])).toBe(false);
    });
  });
});
