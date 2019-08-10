/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { StoreSubject } from './store-subject';
import { TransformStoreSubject } from './transform-store-subject';
import { IReducerConfig, IStoreConfig } from './interfaces';
import { Subscription } from 'rxjs';

describe('store', () => {
  interface IData {
    prop1: any;
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
      prop1: {
        key1: 'foo',
      },
      key2: 'bar',
    };

    const reducer1Fn = function(_state: IData, _action: IAction): IData {
      _state.prop1.key1 = _state.prop1.key1 + _action.payload;
      return _state;
    };

    const reducer2Fn = function(_state: IData, _action: IAction): IData {
      _state.prop1.key1 = _state.prop1.key1 + _action.payload + _state.prop1.key1;
      return _state;
    };

    rootReducer = {
      reducer1: reducer1Fn,
      reducer2: reducer2Fn,
    };

    const storeConfig: IStoreConfig = {
      rootReducer: rootReducer,
      initialStore: initialStore,
      hash: true,
    };

    store = new StoreSubject(storeConfig);

    action1 = store.action.reducer1;
    action2 = store.action.reducer2;

    // Call Action
    action2({
      payload: 'bar',
    });
  });

  it('should accept transform in StoreSubject config', () => {
    const transformMap: any = {
      key1: '',
      prop2: {
        key2: '',
      },
    };

    const transformStore: TransformStoreSubject<any> = new TransformStoreSubject<any>(
      transformMap,
      store
    );

    let _transformedStructure: any;
    transformStore.subscribe((_r: any) => {
      _transformedStructure = _r;
    });

    let _originalStructure: any;
    const s2: Subscription = store.subscribe((_r: any) => {
      _originalStructure = _r;
    });

    // transformed
    expect(_transformedStructure).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });

    // original
    expect(_originalStructure).toEqual({ key2: 'bar', prop1: { key1: 'foobarfoo' } });
    s2.unsubscribe();
  });

  it('should add transform using key and config', () => {
    const transformMap: any = {
      prop1: {
        key1: '',
      },
      prop2: {
        key2: '',
      },
    };

    const transformStore: TransformStoreSubject<any> = new TransformStoreSubject<any>(
      transformMap,
      store
    );

    const transform1Map: any = {
      key1: '',
      prop2: {
        key2: '',
      },
    };

    transformStore.transform('transform1', transform1Map);

    let _transformedStructure: any;
    transformStore.transforms.transform1.subscribe((_r: any) => {
      _transformedStructure = _r;
    });

    let _originalStructure: any;
    const s2: Subscription = store.subscribe((_r: any) => {
      _originalStructure = _r;
    });

    // transformed
    expect(_transformedStructure).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });

    // original
    expect(_originalStructure).toEqual({ key2: 'bar', prop1: { key1: 'foobarfoo' } });
    s2.unsubscribe();
  });

  it('should add transform using key and config and subscribe later', () => {
    const transformMap: any = {
      prop1: {
        key1: '',
      },
      prop2: {
        key2: '',
      },
    };

    const transformStore: TransformStoreSubject<any> = new TransformStoreSubject<any>(
      transformMap,
      store
    );

    const transform1Map: any = {
      key1: '',
      prop2: {
        key2: '',
      },
    };

    let _transformedStructure2: any;
    const s2: Subscription = transformStore
      .transform('transform1', transform1Map)
      .subscribe((_r: any) => {
        _transformedStructure2 = _r;
      });

    let _transformedStructure: any;
    const s1: Subscription = transformStore.transforms.transform1.subscribe((_r: any) => {
      _transformedStructure = _r;
    });

    let _originalStructure: any;
    const s3: Subscription = store.subscribe((_r: any) => {
      _originalStructure = _r;
    });

    // transformed
    expect(_transformedStructure).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });
    expect(_transformedStructure2).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });

    // original
    expect(_originalStructure).toEqual({ key2: 'bar', prop1: { key1: 'foobarfoo' } });
    s1.unsubscribe();
    s2.unsubscribe();
    s3.unsubscribe();
  });

  it('should subscribe to transform while adding key and config', () => {
    const transformMap: any = {
      prop1: {
        key1: '',
      },
      prop2: {
        key2: '',
      },
    };

    const transformStore: TransformStoreSubject<any> = new TransformStoreSubject<any>(
      transformMap,
      store
    );

    const transform1Map: any = {
      key1: '',
      prop2: {
        key2: '',
      },
    };

    let _transformedStructure2: any;
    const s2: Subscription = transformStore
      .transform('transform1', transform1Map)
      .subscribe((_r: any) => {
        _transformedStructure2 = _r;
      });

    let _transformedStructure: any;
    const s1: Subscription = transformStore.transforms.transform1.subscribe((_r: any) => {
      _transformedStructure = _r;
    });

    let _originalStructure: any;
    const s3: Subscription = store.subscribe((_r: any) => {
      _originalStructure = _r;
    });

    // transformed
    expect(_transformedStructure).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });
    expect(_transformedStructure2).toEqual({ key1: 'foobarfoo', prop2: { key2: 'bar' } });

    // original
    expect(_originalStructure).toEqual({ key2: 'bar', prop1: { key1: 'foobarfoo' } });
    s1.unsubscribe();
    s2.unsubscribe();
    s3.unsubscribe();
  });
});
