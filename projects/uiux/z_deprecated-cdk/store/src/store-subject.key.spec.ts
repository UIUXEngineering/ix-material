/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { StoreSubject } from './store-subject';
import { IReducerConfig, IStoreConfig } from './interfaces';
import { Subscription } from 'rxjs';

describe('store', () => {
  interface IData {
    key1: string;
    key2: string;
  }

  interface IAction {
    payload: any;
  }

  let initialStore: IData;
  let store: StoreSubject<IData>;

  let rootReducer: IReducerConfig;

  let action1: Function;
  let action2: Function;

  beforeEach(() => {
    initialStore = {
      key1: 'foo',
      key2: 'bar',
    };

    const reducer1Fn = function(_state: IData, _action: IAction): IData {
      _state.key1 = _state.key1 + _action.payload;
      return _state;
    };

    const reducer2Fn = function(_state: IData, _action: IAction): IData {
      _state.key1 = _state.key1 + _action.payload + _state.key1;
      return _state;
    };

    rootReducer = {
      reducer1: reducer1Fn,
      reducer2: reducer2Fn,
    };

    const config: IStoreConfig = {
      rootReducer: rootReducer,
      initialStore: initialStore,
      hash: true,
    };

    store = new StoreSubject(config);

    action1 = store.action.reducer1;
    action2 = store.action.reducer2;
  });

  it('should update state from reducer 1', () => {
    store.action.reducer1({
      payload: 'bar',
    });

    let _r: any;
    const s: Subscription = store.getKey('key1').subscribe((_result: any) => {
      _r = _result;
    });

    expect(_r).toEqual('foobar');
    s.unsubscribe();
  });

  it('should update state from reducer 2', () => {
    let _r: any;
    const s: Subscription = store.getKey('key1').subscribe((_result: any) => {
      _r = _result;
    });

    store.action.reducer2({
      payload: 'bar',
    });

    expect(_r).toEqual('foobarfoo');
    s.unsubscribe();
  });

  it('should decouple reducer 1 from state', () => {
    action1({
      payload: 'bar',
    });

    let _r: any;
    const s: Subscription = store.getKey('key1').subscribe((_result: any) => {
      _r = _result;
    });

    expect(_r).toEqual('foobar');
    s.unsubscribe();
  });

  it('should decouple reducer 2 from state', () => {
    action2({
      payload: 'bar',
    });

    let _r: any;
    const s: Subscription = store.getKey('key1').subscribe((_result: any) => {
      _r = _result;
    });

    expect(_r).toEqual('foobarfoo');
    s.unsubscribe();
  });

  it('should decouple reducer 2 from state', () => {
    action2({
      payload: 'bar',
    });

    let _r: any;
    const s: Subscription = store.getKey('key1').subscribe((_result: any) => {
      _r = _result;
    });

    let _r2: any;
    const s2: Subscription = store.subscribe((_result: any) => {
      _r2 = _result;
    });

    expect(_r).toEqual('foobarfoo');
    expect(_r2).toEqual({ key1: 'foobarfoo', key2: 'bar' });
    s2.unsubscribe();
    s.unsubscribe();
  });
});
