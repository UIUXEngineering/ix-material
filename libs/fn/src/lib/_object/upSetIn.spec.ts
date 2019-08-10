/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn } from '../_common/getIn';
import { upSetIn } from './upSetIn';

describe('updateIn', () => {
  let object: any | null;

  beforeEach(() => {
    object = { foo: { bar: { baz: 'test' } } };
  });

  afterEach(() => {
    object = null;
  });

  describe('upSetIn', function() {
    it('sets the value at the given key, creating objects if necessary', function() {
      const res = upSetIn(object, ['foo', 'newprop', 'another'], 'upSetInTest');
      expect(res).toEqual(object);
      expect(object.foo.newprop.another).toEqual('upSetInTest');
    });

    it('accepts dot delimited strings for keys', function() {
      const res = upSetIn(object, 'foo.newprop.another', 'upSetInTest');
      expect(res).toEqual(object);
      expect(object.foo.newprop.another).toEqual('upSetInTest');
    });

    /**
     * Arrays
     */
    it('should set _array', () => {
      const arr: any[] = [];
      const res: any[] = upSetIn(arr, '[1]', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].foo).toEqual('foo');
    });

    it('should set sub _array', () => {
      const arr: any[] = [];
      const res: any[] = upSetIn(arr, '[1][0]', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1][0].foo).toEqual('foo');
    });

    it('should set sub _array', () => {
      const arr: any[] = [];
      const res: any[] = upSetIn(arr, '[1][0].bar', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1][0].bar.foo).toEqual('foo');
    });

    it('should drill into _array', () => {
      const arr: any[] = [
        {
          foo: 'bar',
        },
      ];
      const res: any[] = upSetIn(arr, '[0].foo', 'baz');

      expect(res).toEqual(arr);
      expect(arr[0].foo).toEqual('baz');
    });

    it('should drill into sub _array', () => {
      const arr: any[] = [
        {
          foo: 'bar',
        },
        [{ bar: 'baz' }],
      ];
      const res: any[] = upSetIn(arr, '[1][0].bar', 'baz');

      expect(res).toEqual(arr);
      expect(arr[1][0].bar).toEqual('baz');
    });

    /**
     * Objects
     */
    it('should create property on _object', function() {
      const obj: any = {};
      const res: any = upSetIn(obj, 'foo', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo).toEqual('bar');
    });

    it('should create deep property on _object', function() {
      const obj: any = {};
      const res: any = upSetIn(obj, 'foo.baz', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo.baz).toEqual('bar');
    });

    it('should set deep _array on _object', function() {
      const obj: any = {};
      const res: any = upSetIn(obj, 'foo.baz', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo.baz).toEqual('bar');
    });

    it('should set deep _array on _object', function() {
      const obj: any = {};
      const res: any = upSetIn(obj, 'foo[0]', [{ bar: 'bum' }]);

      expect(res).toEqual(obj);
      expect(obj.foo[0][0].bar).toEqual('bum');
    });

    it('should set deep _array on _object', function() {
      const obj: any = {};
      const res: any = upSetIn(obj, 'foo[0]', { bar: 'bum' });

      expect(res).toEqual(obj);
      expect(obj.foo[0].bar).toEqual('bum');
    });

    it('should set sub _array', () => {
      const arr: any[] = [];
      const res: any[] = upSetIn(arr, '[1].bar[0].baz', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].bar[0].baz.foo).toEqual('foo');
    });

    it('should set complex path starting with _array', () => {
      const arr: any[] = [];
      const res: any[] = upSetIn(arr, '[1].bar[0].baz', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].bar[0].baz.foo).toEqual('foo');

      const getValue: string = getIn(arr, '[1].bar[0].baz.foo');
      expect(getValue).toEqual('foo');
    });

    it('should set complex path starting with _object', () => {
      const obj: any = {};
      const res: any = upSetIn(obj, 'a[1].bar[0].baz', 'b');

      expect(res).toEqual(obj);
      expect(res.a[1].bar[0].baz).toEqual('b');

      const getValue: string = getIn(res, 'a[1].bar[0].baz');
      expect(getValue).toEqual('b');
    });
  });
});
