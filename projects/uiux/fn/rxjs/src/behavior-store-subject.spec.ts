/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasValue } from '@uiux/fn/value';
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

    s.setValue(
      {
        foo: 'bar',
      },
      false
    );

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({
      foo: null,
    });
  });

  it('should merge and not publish store', () => {
    const i: any = {
      foo: null,
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.merge(
      {
        foo: 'bar',
      },
      false
    );

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({
      foo: null,
    });
  });

  it('should mergeIn', () => {
    const src: any = {
      a: 'a',
      b: {
        c: {
          d: 'd',
        },
      },
    };

    const expected: any = {
      a: 'a',
      b: {
        c: {
          d: 'd',
          e: 'e',
        },
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(src);

    let r: any;
    sub.subscribe((_r: any) => {
      r = _r;
    });

    sub.mergeIn('b.c', { e: 'e' });
    expect(r).toEqual(expected);
  });

  it('should publish after setValue', () => {
    const i: any = {
      foo: null,
    };

    const s: BehaviorStoreSubject<any> = new BehaviorStoreSubject<any>(i);

    let r: any;
    s.subscribe((_r: any) => {
      r = _r;
    });

    s.merge({
      foo: 'bar',
    });

    s.publish();

    expect(s.getValue().foo).toEqual('bar');
    expect(r).toEqual({ foo: 'bar' });
  });

  it('should setValue', (done) => {
    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    const src: any = {
      a: 'a',
      b: 'b',
    };

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(src);
        done();
      }
    });

    sub.setValue(src);
  });

  it('should merge', (done) => {
    const src: any = {
      a: 'a',
      b: 'b',
    };

    const expected: any = {
      a: 'a',
      b: 'b',
      c: 'c',
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.merge({ c: 'c' });
  });

  it('should setValueByKey', (done) => {
    const src: any = {
      a: 'a',
      b: 'b',
    };

    const expected: any = {
      a: 'a',
      b: 'b',
      c: 'c',
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.setValueByKey('c', 'c');
  });

  it('should setValueByKey', () => {
    const src: any = {
      a: 'a',
      b: 'b',
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(src);

    expect(sub.getValueByKey('a')).toEqual('a');
  });

  it('should getIn', () => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(src);

    expect(sub.getIn('b.c')).toEqual('c');
  });

  it('should setIn', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const expected: any = {
      a: 'a',
      b: {
        c: 'c',
        d: 'd',
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.setIn('b.d', 'd');
  });

  it('should deleteIn', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const expected: any = {
      a: 'a',
      b: {
        c: 'c',
        // 'd': 'd',
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.deleteIn('b.d');
  });

  it('should nullKey', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const expected: any = {
      a: null,
      b: {
        c: 'c',
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.nullKey('a');
  });

  it('should undefineKey', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const expected: any = {
      a: undefined,
      b: {
        c: 'c',
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.undefineKey('a');
  });

  it('should nullIn', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
        d: 'd',
      },
    };

    const expected: any = {
      a: 'a',
      b: {
        c: 'c',
        d: null,
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.nullIn('b.d');
  });

  it('should undefineIn', (done) => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
        d: 'd',
      },
    };

    const expected: any = {
      a: 'a',
      b: {
        c: 'c',
        d: undefined,
      },
    };

    const sub: BehaviorStoreSubject<any> = new BehaviorStoreSubject(null);

    sub.subscribe((r: any) => {
      if (hasValue(r)) {
        expect(r).toEqual(expected);
        done();
      }
    });

    sub.setValue(src, false);
    sub.undefineIn('b.d');
  });
});
