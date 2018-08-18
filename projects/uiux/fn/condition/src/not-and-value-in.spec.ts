/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { notAndValueIn } from './not-and-value-in';

describe('notAndValueIn', () => {
  it('should be true for src false, target true', () => {
    const src: any = {
      a: {
        b: null,
      },
    };
    const tar: any = {
      c: {
        d: 'foo',
      },
    };
    expect(notAndValueIn(src, 'a.b', tar, 'c.d')).toBe(true);
  });

  it('should be false for src true, target true', () => {
    const src: any = {
      a: {
        b: 'foo',
      },
    };
    const tar: any = {
      c: {
        d: 'foo',
      },
    };
    expect(notAndValueIn(src, 'a.b', tar, 'c.d')).toBe(false);
  });

  it('should be false for src true, target false', () => {
    const src: any = {
      a: {
        b: 'foo',
      },
    };
    const tar: any = {
      c: {
        d: null,
      },
    };
    expect(notAndValueIn(src, 'a.b', tar, 'c.d')).toBe(false);
  });

  it('should be false for src false, target false', () => {
    const src: any = {
      a: {
        b: null,
      },
    };
    const tar: any = {
      c: {
        d: null,
      },
    };
    expect(notAndValueIn(src, 'a.b', tar, 'c.d')).toBe(false);
  });

  it('should be false for src false, target false', () => {
    const src = 'foo';
    const tar: any = {
      c: {
        d: null,
      },
    };
    expect(notAndValueIn(src, '', tar, 'c.d')).toBe(false);
  });

  it('should be false for src false, target true', () => {
    const src = null;
    const tar: any = {
      c: {
        d: 'foo',
      },
    };
    expect(notAndValueIn(src, '', tar, 'c.d')).toBe(true);
  });
});
