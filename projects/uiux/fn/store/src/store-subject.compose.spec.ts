/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { StoreSubject } from './store-subject';
import { IReducerConfig, IStoreConfig } from './interfaces';

describe('reduce', () => {
  interface IFooState {
    data: string;
  }

  interface IAction {
    payload: any;
  }

  let initialData: IFooState;
  let state1: StoreSubject<IFooState, IAction>;
  let state2: StoreSubject<IFooState, IAction>;

  beforeEach(() => {
    initialData = {
      data: 'foo0',
    };

    const reducer1Fn = function(_state: IFooState, _action: IAction): IFooState {
      _state.data = _state.data + _action.payload;
      return _state;
    };

    const reducer2Fn = function(_state: IFooState, _action: IAction): IFooState {
      _state.data = _state.data + _action.payload + _state.data;
      return _state;
    };

    const rootReducer: IReducerConfig = {
      reducer1: reducer1Fn,
      reducer2: reducer2Fn,
    };

    const config: IStoreConfig = {
      rootReducer: rootReducer,
      initialStore: initialData,
      hash: true,
    };

    state1 = new StoreSubject(config);
    state2 = new StoreSubject(config);
  });

  it('should have initial data', () => {
    state1.composeResult(state2, (_state: IFooState) => {
      if (_state && _state.data) {
        return _state.data.indexOf('bar') > -1;
      }
    });

    expect(state1.getValue().data).toEqual('foo0');
    expect(state2.getValue().data).toEqual('foo0');
  });

  it('should not pass data', () => {
    state1.composeResult(state2, (_state: IFooState) => {
      if (_state && _state.data) {
        return _state.data.indexOf('bar') > -1;
      }
    });

    state1.reducer.reducer1.action({
      payload: 'foo1',
    });

    state1.reducer.reducer1.action({
      payload: 'foo2',
    });

    expect(state1.getValue().data).toEqual('foo0foo1foo2');
    expect(state2.getValue().data).toEqual('foo0');
  });

  it('should compose result of state1', () => {
    state1.composeResult(state2, (_state: IFooState) => {
      if (_state && _state.data) {
        return _state.data.indexOf('bar') > -1;
      }
    });

    state1.reducer.reducer1.action({
      payload: 'foo1',
    });

    expect(state1.getValue().data).toEqual('foo0foo1');
    expect(state2.getValue().data).toEqual('foo0');

    state1.reducer.reducer1.action({
      payload: 'bar2',
    });

    expect(state1.getValue().data).toEqual('foo0foo1bar2');
    expect(state2.getValue().data).toEqual('foo0foo1bar2');
  });

  it('should compose result of state1', () => {
    state1.composeAction(state2, (_state: IFooState) => {
      return _state.data.indexOf('bar2') > -1;
    });

    expect(state1.getValue().data).toEqual('foo0');
    expect(state2.getValue().data).toEqual('foo0');

    state1.reducer.reducer1.action({
      payload: 'foo1',
    });

    expect(state1.getValue().data).toEqual('foo0foo1');
    expect(state2.getValue().data).toEqual('foo0');

    state1.reducer.reducer1.action({
      payload: 'bar1',
    });

    expect(state1.getValue().data).toEqual('foo0foo1bar1');
    expect(state2.getValue().data).toEqual('foo0');

    state1.reducer.reducer1.action({
      payload: 'bar2',
    });

    expect(state1.getValue().data).toEqual('foo0foo1bar1bar2');
    expect(state2.getValue().data).toEqual('foo0foo1bar1bar2');
  });
});
