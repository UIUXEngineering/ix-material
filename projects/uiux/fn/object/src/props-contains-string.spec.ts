/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { propsContainsString } from './props-contains-string';

describe('anyPropsContainsString', () => {
  it('should return true for root level', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'fo', ['a', 'b.b1', 'c[0].c1'])).toBe(true);
  });

  it('should return true for nested object', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'ar', ['a', 'b.b1', 'c[0].c1'])).toBe(true);
  });

  it('should return true for nested array', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'az', ['a', 'b.b1', 'c[0].c1'])).toBe(true);
  });

  it('should return true if multiple values match', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'ba', ['a', 'b.b1', 'c[0].c1'])).toBe(true);
  });

  it('should return true if exact match', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'bar', ['a', 'b.b1', 'c[0].c1'])).toBe(true);
  });

  it('should return false if no match', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'xy', ['a', 'b.b1', 'c[0].c1'])).toBe(false);
  });

  it('should return false prop not exist', () => {
    const t: any = {
      a: 'foo',
      b: {
        b1: 'bar',
      },
      c: [
        {
          c1: 'baz',
        },
      ],
    };

    expect(propsContainsString(t, 'xy', ['x.y.z'])).toBe(false);
  });
});
