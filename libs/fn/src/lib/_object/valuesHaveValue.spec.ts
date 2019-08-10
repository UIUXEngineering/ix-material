/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { valuesHaveValue } from './valuesHaveValue';

describe('propsHaveValue', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('object with multiple props', () => {
    it('should return false for _object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return true for _object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return true for _object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return false for _object with empty _array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return true for _object with filled _array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return false for _object with empty _string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return false for _object with empty _array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(valuesHaveValue(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(valuesHaveValue(obj, ['foo', 'bar', 'baz', 'bum'])).toBeTruthy();
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(valuesHaveValue(obj, ['foo', 'bar', 'baz', 'bum'])).toBeTruthy();
    });

    it('should return false for all props defined with empty _string and _array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(valuesHaveValue(obj, ['foo', 'bar', 'baz', 'bum'])).toBeFalsy();
    });

    it('should return false for all props defined and empty _object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(valuesHaveValue(obj, ['foo', 'bar', 'baz', 'bum'])).toBeFalsy();
    });
  });

  describe('object', () => {
    it('should return false for empty _object value', () => {
      expect(valuesHaveValue({})).toBeFalsy();
    });

    it('should return false for empty _object with no keys', () => {
      expect(valuesHaveValue({}, [])).toBeFalsy();
    });

    it('should return false for empty _object with keys', () => {
      expect(valuesHaveValue({}, ['foo'])).toBeFalsy();
    });

    it('should return false for empty _object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(valuesHaveValue(obj, ['bar'])).toBeFalsy();
    });

    it('should return false for _object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(valuesHaveValue(obj, ['foo'])).toBeTruthy();
    });

    it('should return true for _object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(valuesHaveValue(obj, ['foo'])).toBeTruthy();
    });

    it('should return false for _object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(valuesHaveValue(obj, ['bar'])).toBeFalsy();
    });
  });

  describe('empty value', () => {
    it('should return false for empty _object value', () => {
      expect(valuesHaveValue({})).toBeFalsy();
    });

    it('should return false for null value', () => {
      expect(valuesHaveValue(null)).toBeFalsy();
    });

    it('should return false for undefined value', () => {
      expect(valuesHaveValue(undefined)).toBeFalsy();
    });

    it('should return false for empty _string value', () => {
      expect(valuesHaveValue('')).toBeFalsy();
    });

    it('should return false for empty _string value', () => {
      expect(valuesHaveValue([])).toBeFalsy();
    });
  });
});
