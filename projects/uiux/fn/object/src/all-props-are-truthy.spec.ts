/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsAreTruthy } from './all-props-are-truthy';

describe('allPropsAreTruthy', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('object with multiple props', () => {
    it('should return true for valid keys', () => {
      const obj: any = {
        foo: 'foo',
        bar: ['bar'],
        baz: { foo: 'foo' },
        bum: true,
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });

    it('should return false for object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });

    it('should return true for object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return true for object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return true for object with filled array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });

    it('should return false for object with empty string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for all props defined with empty string and array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for all props defined and empty object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for null prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: null,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return false for undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: undefined,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });
  });

  describe('object', () => {
    it('should return false for empty object value', () => {
      expect(allPropsAreTruthy({})).toBeFalsy();
    });

    it('should return false for empty object with no keys', () => {
      expect(allPropsAreTruthy({})).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      expect(allPropsAreTruthy({})).toBeFalsy();
    });

    it('should return false for object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(allPropsAreTruthy(obj)).toBeFalsy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(allPropsAreTruthy(obj)).toBeTruthy();
    });
  });

  describe('empty value', () => {
    it('should return false for empty object value', () => {
      expect(allPropsAreTruthy({})).toBeFalsy();
    });

    it('should return false for null value', () => {
      expect(allPropsAreTruthy(null)).toBeFalsy();
    });

    it('should return false for undefined value', () => {
      expect(allPropsAreTruthy(undefined)).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsAreTruthy('')).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(allPropsAreTruthy([])).toBeFalsy();
    });
  });
});
