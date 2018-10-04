/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorKeysSubject } from './behavior-keys-subject';
import { Subject } from 'rxjs';

describe('ZipSubject', () => {
  it('should set keys dynamically', (done) => {
    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>();

    s.setKey('a', null);
    s.setKey('b', null);
    s.setKey('c', null);

    s.subscribe((r: any) => {
      expect(r).toEqual({
        a: 'foo',
        b: 'bar',
        c: 'baz',
      });

      done();
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.nextKey('c', 'baz');
  });

  it('should not publish until all propsHaveValue', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    s.subscribe((r: any) => {
      expect(r).toEqual({
        a: 'foo',
        b: 'bar',
        c: 'baz',
      });
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.nextKey('c', 'baz');
  });

  it('should not publish until all allPropsAreDefined', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i, {
      allValuesDefined: true,
    });

    s.subscribe((r: any) => {
      expect(r).toEqual({
        a: 'foo',
        b: 'bar',
        c: 'baz',
      });
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.nextKey('c', 'baz');
  });

  it('should not publish until all allPropsAreDefined', () => {
    const i: any = {
      currentSubProjects: null,
      desc: null,
      guid: null,
      name: null,
      subProjects: null,
      teamMembers: null,
      todo: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i, {
      allValuesDefined: true,
    });

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.nextKey('guid', 'project-b11bd37f-5954-43c2-865d-60e83041108d');
    expect(r).toBeUndefined();
  });

  it('should merge objects', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    s.subscribe((r: any) => {
      expect(r).toEqual({
        a: 'foo',
        b: 'bar',
        c: 'baz',
        d: 'bum',
      });
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.merge({
      c: 'baz',
      d: 'bum',
    });
  });

  it('should call multiple times', () => {
    const spy = jasmine.createSpy('spy');

    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      spy(r);
      result = r;
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.merge(
      {
        c: 'baz',
        d: 'bum',
      },
      true
    );

    s.nextKey('a', 'faz');
    s.merge(
      {
        c: 'bay',
        d: 'boo',
      },
      true
    );

    expect(spy.calls.count()).toEqual(3);
    expect(result).toEqual({
      a: 'faz',
      b: 'bar',
      c: 'bay',
      d: 'boo',
    });
  });

  it('should reset with config', () => {
    const spy = jasmine.createSpy('spy');

    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i, {
      reset: true,
    });

    let result: any;

    s.subscribe((r: any) => {
      spy(r);
      result = r;
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.merge(
      {
        c: 'baz',
        d: 'bum',
      },
      true
    );

    // will reset here

    s.nextKey('a', 'faz');
    s.merge(
      {
        c: 'bay',
        d: 'boo',
      },
      true
    );
    s.nextKey('b', 'bum');

    expect(spy.calls.count()).toEqual(2);
    expect(result).toEqual({
      a: 'faz',
      b: 'bum',
      c: 'bay',
      d: 'boo',
    });
  });

  it('should reset with by calling reset()', () => {
    const spy = jasmine.createSpy('spy');

    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      spy(r);
      result = r;
    });

    s.nextKey('a', 'foo');
    s.nextKey('b', 'bar');
    s.merge(
      {
        c: 'baz',
        d: 'bum',
      },
      true
    );

    s.reset();

    s.nextKey('a', 'faz');
    s.merge(
      {
        c: 'bay',
        d: 'boo',
      },
      true
    );
    s.nextKey('b', 'bum');

    expect(spy.calls.count()).toEqual(2);
    expect(result).toEqual({
      a: 'faz',
      b: 'bum',
      c: 'bay',
      d: 'boo',
    });
  });

  it('should not publish if using setKey or merge if publish set to false', () => {
    const spy = jasmine.createSpy('spy');

    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      spy(r);
      result = r;
    });

    s.setKey('a', 'foo', false);
    s.setKey('b', 'bar', false);
    s.merge(
      {
        c: 'baz',
        d: 'bum',
      },
      false
    );

    s.setKey('a', 'faz', false);
    s.merge(
      {
        c: 'bay',
        d: 'boo',
      },
      false
    );
    s.setKey('b', 'bum', false);

    s.publish();

    expect(spy.calls.count()).toEqual(1);
    expect(result).toEqual({
      a: 'faz',
      b: 'bum',
      c: 'bay',
      d: 'boo',
    });
  });

  it('should take observable', () => {
    const i: any = {
      a: null,
      b: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    const sub1 = new Subject();
    const sub2 = new Subject();

    s.setObservable('a', sub1);
    s.setObservable('b', sub2);

    sub1.next('faz');
    sub2.next('bum');

    expect(result).toEqual({
      a: 'faz',
      b: 'bum',
    });
  });

  it('should concat arrays', () => {
    const i: any = {
      a: null,
      b: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    s.setKey('a', 'foo');
    s.pushKey('b', 'a');
    s.pushKey('b', 'b');

    s.publish();

    expect(result).toEqual({
      a: 'foo',
      b: ['a', 'b'],
    });
  });

  it('should concat arrays and publish', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    s.nextKey('a', 'foo');
    s.pushNextKey('b', 'a');
    s.pushKey('b', ['c', 'd']);
    s.pushNextKey('c', ['a', 'b']);

    expect(result).toEqual({
      a: 'foo',
      b: ['a', 'c', 'd'],
      c: ['a', 'b'],
    });
  });

  it('should publish raw store', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    s.setKey('a', 'foo');
    s.pushKey('b', 'a');
    s.pushKey('b', ['c', 'd']);
    s.pushKey('c', ['a', 'b']);

    s.publishRawStore();

    expect(result).toEqual({
      a: 'foo',
      b: ['a', 'c', 'd'],
      c: ['a', 'b'],
      d: null,
    });
  });

  it('should accept uniqBy key string for arrays', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    s.setKey('a', 'foo');
    s.pushKey('b', { x: 'foo' });
    s.pushKey('b', [{ y: 'bar' }, { z: 'baz' }]);

    // duplicates
    s.pushKey('b', [{ y: 'bar' }], 'y');

    s.publishRawStore();

    expect(result.b).toEqual([{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }]);
    expect(result).toEqual({
      a: 'foo',
      b: [{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }],
      c: null,
      d: null,
    });
  });

  it('should get intialStore unmutated', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    s.setKey('a', 'foo');
    s.pushKey('b', { x: 'foo' });
    s.pushKey('b', [{ y: 'bar' }, { z: 'baz' }]);

    // duplicates
    s.pushKey('b', [{ y: 'bar' }], 'y');

    s.publishRawStore();

    expect(result.b).toEqual([{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }]);
    expect(result).toEqual({
      a: 'foo',
      b: [{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }],
      c: null,
      d: null,
    });

    // intitial store
    expect(s.getInitialStore().b).toBeNull();
  });

  it('should subscribe to raw store', () => {
    const i: any = {
      a: null,
      b: null,
      c: null,
      d: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i, {
      subscribeToRawStore: true,
    });

    s.setKey('a', 'foo');
    s.pushKey('b', { x: 'foo' });
    s.pushKey('b', [{ y: 'bar' }, { z: 'baz' }]);

    // duplicates
    s.pushKey('b', [{ y: 'bar' }], 'y');

    s.publishRawStore();

    let result: any;

    s.subscribe((r: any) => {
      result = r;
    });

    expect(result.b).toEqual([{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }]);
    expect(result).toEqual({
      a: 'foo',
      b: [{ x: 'foo' }, { z: 'baz' }, { y: 'bar' }],
      c: null,
      d: null,
    });

    // intitial store
    expect(s.getInitialStore().b).toBeNull();
  });

  it('should set nested key', () => {
    const i: any = {
      a: null,
      b: { d: { e: null } },
      c: null,
    };

    const s: BehaviorKeysSubject<any> = new BehaviorKeysSubject<any>(i);

    s.subscribe((r: any) => {
      expect(r.a).toEqual('foo');
      expect(r.b.d.e).toEqual('bar');
      expect(r.c).toEqual('baz');
    });

    s.nextKey('a', 'foo');
    s.nextKey('b.d.e', 'bar');
    s.nextKey('c', 'baz');
  });
});
