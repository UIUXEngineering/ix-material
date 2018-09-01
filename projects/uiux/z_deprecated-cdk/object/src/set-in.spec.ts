/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn } from './get-in';
import { setIn } from './set-in';

describe('Object', () => {
  let object: any | null;

  beforeEach(() => {
    object = { foo: { bar: { baz: 'test' } } };
  });

  afterEach(() => {
    object = null;
  });

  describe('setIn', function() {
    it('sets the value at the given key, creating objects if necessary', function() {
      const res = setIn(object, ['foo', 'newprop', 'another'], 'setInTest');
      expect(res).toEqual(object);
      expect(object.foo.newprop.another).toEqual('setInTest');
    });

    it('accepts dot delimited strings for keys', function() {
      const res = setIn(object, 'foo.newprop.another', 'setInTest');
      expect(res).toEqual(object);
      expect(object.foo.newprop.another).toEqual('setInTest');
    });

    /**
     * Arrays
     */
    it('should set array', () => {
      const arr: any[] = [];
      const res: any[] = setIn(arr, '[1]', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].foo).toEqual('foo');
    });

    it('should set sub array', () => {
      const arr: any[] = [];
      const res: any[] = setIn(arr, '[1][0]', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1][0].foo).toEqual('foo');
    });

    it('should set sub array', () => {
      const arr: any[] = [];
      const res: any[] = setIn(arr, '[1][0].bar', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1][0].bar.foo).toEqual('foo');
    });

    it('should drill into array', () => {
      const arr: any[] = [
        {
          foo: 'bar',
        },
      ];
      const res: any[] = setIn(arr, '[0].foo', 'baz');

      expect(res).toEqual(arr);
      expect(arr[0].foo).toEqual('baz');
    });

    it('should drill into sub array', () => {
      const arr: any[] = [
        {
          foo: 'bar',
        },
        [{ bar: 'baz' }],
      ];
      const res: any[] = setIn(arr, '[1][0].bar', 'baz');

      expect(res).toEqual(arr);
      expect(arr[1][0].bar).toEqual('baz');
    });

    /**
     * Objects
     */
    it('should create property on object', function() {
      const obj: any = {};
      const res: any = setIn(obj, 'foo', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo).toEqual('bar');
    });

    it('should create deep property on object', function() {
      const obj: any = {};
      const res: any = setIn(obj, 'foo.baz', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo.baz).toEqual('bar');
    });

    it('should set deep array on object', function() {
      const obj: any = {};
      const res: any = setIn(obj, 'foo.baz', 'bar');
      expect(res).toEqual(obj);
      expect(obj.foo.baz).toEqual('bar');
    });

    it('should set deep array on object', function() {
      const obj: any = {};
      const res: any = setIn(obj, 'foo[0]', [{ bar: 'bum' }]);

      expect(res).toEqual(obj);
      expect(obj.foo[0][0].bar).toEqual('bum');
    });

    it('should set deep array on object', function() {
      const obj: any = {};
      const res: any = setIn(obj, 'foo[0]', { bar: 'bum' });

      expect(res).toEqual(obj);
      expect(obj.foo[0].bar).toEqual('bum');
    });

    it('should set sub array', () => {
      const arr: any[] = [];
      const res: any[] = setIn(arr, '[1].bar[0].baz', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].bar[0].baz.foo).toEqual('foo');
    });

    it('should set complex path starting with array', () => {
      const arr: any[] = [];
      const res: any[] = setIn(arr, '[1].bar[0].baz', { foo: 'foo' });

      expect(res).toEqual(arr);
      expect(arr[1].bar[0].baz.foo).toEqual('foo');

      const getValue: string = getIn(arr, '[1].bar[0].baz.foo');
      expect(getValue).toEqual('foo');
    });

    it('should set complex path starting with object', () => {
      const obj: any = {};
      const res: any = setIn(obj, 'a[1].bar[0].baz', 'b');

      expect(res).toEqual(obj);
      expect(res.a[1].bar[0].baz).toEqual('b');

      const getValue: string = getIn(res, 'a[1].bar[0].baz');
      expect(getValue).toEqual('b');
    });

    it('should set with undefined path', () => {
      const obj: any = {};
      const path = undefined;
      const res: any = setIn(obj, path, { a: 'b' });

      expect(res.a).toEqual('b');

      const getValue: string = getIn(res, 'a');
      expect(getValue).toEqual('b');
    });

    it('should set with null path', () => {
      const obj: any = {};
      const res: any = setIn(obj, null, { a: 'b' });

      expect(res.a).toEqual('b');

      const getValue: string = getIn(res, 'a');
      expect(getValue).toEqual('b');
    });
  });
});
