/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { StoreSubject } from './store-subject';
import { IReducerConfig, IStoreConfig } from './interfaces';

describe('action', () => {
  interface IState {
    data: string;
  }

  interface IAction {
    payload: any;
  }

  let initialData: IState;
  let store: StoreSubject<IState, IAction>;

  let rootReducer: IReducerConfig;

  let action1: Function;
  let action2: Function;

  beforeEach(() => {
    initialData = {
      data: 'foo',
    };

    const reducer1Fn = function(_state: IState, _action: IAction): IState {
      _state.data = _state.data + _action.payload;
      return _state;
    };

    const reducer2Fn = function(_state: IState, _action: IAction): IState {
      _state.data = _state.data + _action.payload + _state.data;
      return _state;
    };

    rootReducer = {
      reducer1: reducer1Fn,
      reducer2: reducer2Fn,
    };

    const config: IStoreConfig = {
      rootReducer: rootReducer,
      initialStore: initialData,
      hash: true,
    };

    store = new StoreSubject(config);

    action1 = store.action.reducer1;
    action2 = store.action.reducer2;
  });

  it('should define reducer', () => {
    expect(store.action.reducer1).toBeDefined();
    expect(store.action.reducer2).toBeDefined();
  });

  it('should update state from reducer 1', () => {
    store.action.reducer1({
      payload: 'bar',
    });

    expect(store.getValue()).toEqual({ data: 'foobar' });
  });

  it('should update state from reducer 2', () => {
    store.action.reducer2({
      payload: 'bar',
    });

    expect(store.getValue()).toEqual({ data: 'foobarfoo' });
  });

  it('should decouple reducer 1 from state', () => {
    action1({
      payload: 'bar',
    });

    expect(store.getValue()).toEqual({ data: 'foobar' });
  });

  it('should decouple reducer 2 from state', () => {
    action2({
      payload: 'bar',
    });

    expect(store.getValue()).toEqual({ data: 'foobarfoo' });
  });

  it('should create action with type and payload', () => {
    const payload: any = { bar: true };

    const action: any = store.createAction('fooType', payload);

    expect(action.type).toEqual('fooType');
    expect(action.payload).toEqual(payload);
  });

  it('should create action with custom function', () => {
    const config: IStoreConfig = {
      actionCreater: (payload: any) => {
        if (payload === 'foo') {
          return 'bar';
        } else {
          return 'baz';
        }
      },
      rootReducer: rootReducer,
      initialStore: initialData,
      hash: true,
    };

    const store2: StoreSubject<IState, IAction> = (store = new StoreSubject(config));

    let action: any = store2.createCustomAction('foo');
    expect(action).toEqual('bar');

    action = store2.createCustomAction('bar');
    expect(action).toEqual('baz');
  });
});
