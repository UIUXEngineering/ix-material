/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { StoreSubject } from './store-subject';

describe('reduce', () => {
  interface IState {
    data: string;
  }

  interface IAction {
    payload: any;
  }

  let initialData: IState;
  let store: StoreSubject<IState, IAction>;

  beforeEach(() => {
    initialData = {
      data: 'foo',
    };

    store = new StoreSubject({
      initialStore: initialData,
      hash: true,
    });
  });

  it('should define reducer', () => {
    expect(Object.keys(store.reducer).length).toEqual(0);
  });

  it('should update state from reducer 1', () => {
    expect(store.getValue()).toEqual({ data: 'foo' });

    store.update({
      data: 'bar',
    });

    expect(store.getValue()).toEqual({ data: 'bar' });
  });
});
