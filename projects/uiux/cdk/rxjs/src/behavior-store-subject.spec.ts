/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorStoreSubject } from './behavior-store-subject';

describe('BehaviorStoreSubject', () => {
  it('should publish initial store', () => {
    const i: any = {
      foo: 'bar',
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    expect(s.getValue().foo).toEqual('bar');
  });

  it('should setValue and not publish store', () => {
    const i: any = {
      foo: null,
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.setValue({
      foo: 'bar',
    });

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({
      foo: null,
    });
  });

  it('should mergeValue and not publish store', () => {
    const i: any = {
      foo: null,
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.mergeValue({
      foo: 'bar',
    });

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({
      foo: null,
    });
  });

  it('should publishStore after setValue', () => {
    const i: any = {
      foo: null,
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.mergeValue({
      foo: 'bar',
    });

    s.publishStore();

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({ foo: 'bar' });
  });
});
