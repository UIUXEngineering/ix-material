/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isMatch } from './is-match';

describe('contains', () => {
  const func: Function = (bar: string) => {
    return bar;
  };

  const src: any = {
    isString: 'foo',
    isBool: false,
    isUndefined: undefined,
    isNull: null,
    isDeep: {
      foo: 'foo',
      bar: {
        baz: 'bar',
      },
    },
    isDeep2: {
      foo: 'foo',
      bar: {
        baz: {
          bum: 'bum',
        },
      },
    },
    isDupe: {
      isDeep: {
        foo: 'foo',
        bar: {
          baz: 'bar',
        },
      },
    },
    isFunction: () => {},
    isCommonFunction: func,
  };

  it('should return true for top level prop', () => {
    const compare: any = {
      isString: 'foo',
    };

    expect(isMatch(src, compare)).toBe(true);
  });

  it('should match more than one property', () => {
    const compare: any = {
      isString: 'foo',
      isBool: false,
    };

    expect(isMatch(src, compare)).toBe(true);
  });

  it('should return false if one property does not match', () => {
    const compare: any = {
      isString: 'foo',
      isBool: true,
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should match undefined', () => {
    const compare: any = {
      isString: 'foo',
      isUndefined: undefined,
    };

    expect(isMatch(src, compare)).toBe(true);
  });

  it('should return false if undefined is defined', () => {
    const compare: any = {
      isString: 'foo',
      isUndefined: 'bar',
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should match deep object', () => {
    const compare: any = {
      isDeep: {
        foo: 'foo',
        bar: {
          baz: 'bar',
        },
      },
    };

    expect(isMatch(src, compare)).toBe(true);
  });

  it('should return false if value in deep object does not match', () => {
    const compare: any = {
      isDeep: {
        foo: 'foo',
        bar: {
          baz: 'no match',
        },
      },
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should return false if prop in deep object is missing', () => {
    const compare: any = {
      isDeep: {
        foo: 'foo',
        bum: {
          // <-- no match
          baz: 'no match',
        },
      },
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should not match function', () => {
    const compare: any = {
      foo: 'foo',
      isFunction: () => {},
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should match function from same source', () => {
    const compare: any = {
      foo: 'foo',
      isCommonFunction: func,
    };

    expect(isMatch(src, compare)).toBe(false);
  });

  it('should match deep paths', () => {
    const compare: any = {
      'isDeep.bar': {
        baz: 'bar',
      },
      'isDeep2.bar.baz': {
        bum: 'bum',
      },
    };

    expect(isMatch(src, compare)).toBe(true);
  });

  it('should return false if deep paths do not match', () => {
    const compare: any = {
      'isDeep.bar': {
        baz: 'bar',
      },
      'isDeep2.bar.baz': {
        bum: 'no match',
      },
    };

    expect(isMatch(src, compare)).toBe(false);
  });
});
