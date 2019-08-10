/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { BehaviorValueSubject } from './behavior-value-subject';

describe('BehaviorValueSubject', () => {
  it('should not send value unless hasValue', () => {
    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toBe('foo');
    });

    sub.next(null);
    sub.next(undefined);
    sub.next('');
    sub.next('foo');
  });

  it('can send defined value', () => {
    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    let r: any;
    sub.subscribe((_r: any) => {
      r = _r;
    });

    sub.next(null);
    sub.next(undefined);
    sub.next('');

    expect(r).not.toBeDefined();

    sub.nextDefined('');

    expect(r).toBeDefined();
  });

  it('should setValue', (done) => {
    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    const src: any = {
      a: 'a',
      b: 'b',
    };

    sub.subscribe((r: any) => {
      expect(r).toEqual(src);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
    });

    sub.setValue(src, false);
    sub.setValueByKey('c', 'c');
  });

  it('should setValueByKey', () => {
    const src: any = {
      a: 'a',
      b: 'b',
    };

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject(src);

    expect(sub.getValueByKey('a')).toEqual('a');
  });

  it('should getIn', () => {
    const src: any = {
      a: 'a',
      b: {
        c: 'c',
      },
    };

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject(src);

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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
    });

    sub.setValue(src, false);
    sub.deleteIn('b.d');
  });

  it('should mergeIn', (done) => {
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
    });

    sub.setValue(src, false);
    sub.mergeIn('b.c', { e: 'e' });
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
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

    const sub: BehaviorValueSubject<any> = new BehaviorValueSubject();

    sub.subscribe((r: any) => {
      expect(r).toEqual(expected);
      done();
    });

    sub.setValue(src, false);
    sub.undefineIn('b.d');
  });
});
