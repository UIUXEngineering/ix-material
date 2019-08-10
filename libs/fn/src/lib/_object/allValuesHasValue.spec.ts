/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allValuesHasValue } from './allValuesHasValue';

describe('propsHaveValue', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('object with multiple props', () => {
    it('should return false for _object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return true for _object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return true for _object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return false for _object with empty _array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return true for _object with filled _array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return false for _object with empty _string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return false for _object with empty _array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return false for all props defined with empty _string and _array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return false for all props defined and empty _object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return false for null prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: null,
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });

    it('should return false for undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: undefined,
      };
      expect(allValuesHasValue(obj)).toBe(false);
    });
  });

  describe('object', () => {
    it('should return false for empty _object value', () => {
      expect(allValuesHasValue({})).toBe(false);
    });

    it('should return false for empty _object with no keys', () => {
      expect(allValuesHasValue({})).toBe(false);
    });

    it('should return false for empty _object with keys', () => {
      expect(allValuesHasValue({})).toBe(false);
    });

    it('should return false for empty _object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return false for _object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });

    it('should return false for _object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allValuesHasValue(obj)).toBe(true);
    });
  });

  describe('empty value', () => {
    it('should return false for empty _object value', () => {
      expect(allValuesHasValue({})).toBe(false);
    });

    it('should return false for null value', () => {
      expect(allValuesHasValue(null)).toBe(false);
    });

    it('should return false for undefined value', () => {
      expect(allValuesHasValue(undefined)).toBe(false);
    });

    it('should return false for empty _string value', () => {
      expect(allValuesHasValue('')).toBe(false);
    });

    it('should return false for empty _string value', () => {
      expect(allValuesHasValue([])).toBe(false);
    });
  });
});
