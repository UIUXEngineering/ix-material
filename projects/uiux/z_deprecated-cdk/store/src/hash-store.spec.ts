/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { HashStore } from './hash-store';

describe('store', () => {
  interface IFoo {
    data: string;
  }

  let store: HashStore<IFoo>;
  let initialData: IFoo;

  beforeEach(() => {
    initialData = {
      data: 'bar',
    };
  });

  describe('default', () => {
    beforeEach(() => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
    });

    it('should send initial state', (done: Function) => {
      let _result: IFoo;

      store.subscribe((_state: IFoo) => {
        _result = _state;
        expect(_result).toEqual({ data: 'bar' });
        done();
      });
    });

    it('should have initial state', () => {
      expect(store.getValue().data).toEqual('bar');
    });

    it('should update state', () => {
      store.next({ data: 'bar' });
      expect(store.getValue().data).toEqual('bar');
    });

    it('should subscribe', () => {
      let _result: IFoo;

      store.subscribe((_state: IFoo) => {
        _result = _state;
      });

      store.next({ data: 'baz' });
      expect(store.getValue().data).toEqual('baz');
    });
  });

  describe('replay', () => {
    it('should cache states with config', () => {
      store = new HashStore({
        initialStore: initialData,
        record: true,
        hash: true,
      });

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });

      expect(store.cache.length).toEqual(2);
      expect(store.cache[0].data).toEqual('bar');
      expect(store.cache[1].data).toEqual('baz');
    });

    it('should cache states by setting record property', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
      store.record = true;

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });

      expect(store.cache.length).toEqual(2);
      expect(store.cache[0].data).toEqual('bar');
      expect(store.cache[1].data).toEqual('baz');
    });

    it('should cache states by calling startRecord', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
      store.startRecord();

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });

      expect(store.cache.length).toEqual(2);
      expect(store.cache[0].data).toEqual('bar');
      expect(store.cache[1].data).toEqual('baz');
    });

    it('should stop recording', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
      store.startRecord();

      store.next({ data: 'bar' });
      store.stopRecord();
      store.next({ data: 'baz' });

      expect(store.cache.length).toEqual(1);
      expect(store.cache[0].data).toEqual('bar');
    });

    it('should cache by setting property', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });

      store.next({ data: 'bar' });
      store.record = true;
      store.next({ data: 'baz' });
      store.next({ data: 'bum' });

      expect(store.cache.length).toEqual(2);
      expect(store.cache[0].data).toEqual('baz');
      expect(store.cache[1].data).toEqual('bum');
    });

    it('should dump cach', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });
      store.next({ data: 'bum' });

      store.dump();

      expect(store.cache.length).toEqual(0);
    });

    it('should republishAll', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
      store.startRecord();

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });
      store.next({ data: 'bum' });

      let _result: IFoo[] = [];

      store.subscribe((_state: IFoo) => {
        _result.push(_state);
      });

      expect(_result.length).toEqual(1);
      expect(store.cache.length).toEqual(3);

      _result = [];
      store.republishAll();
      expect(_result.length).toEqual(3);
    });

    it('should replayAll', () => {
      store = new HashStore({
        initialStore: initialData,
        hash: true,
      });
      store.startRecord();

      store.next({ data: 'bar' });
      store.next({ data: 'baz' });
      store.next({ data: 'bum' });

      const _result: IFoo[] = [];

      store.replayAll().subscribe((_state: IFoo) => {
        _result.push(_state);
      });

      expect(store.cache.length).toEqual(3);
      expect(_result.length).toEqual(3);
    });
  });
});
