/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { mergePropsToNoValue } from './merge-props-to-no-value';

describe('mergePropsToNoValue', () => {
  it('should mergePropsToNoValue if source has value', () => {
    const t: any = {
      a: 'foo',
      b: ['foo'],
      c: false,
      d: null,
      e: '',
      g: 0,
      createdAt: 1,
      updatedAt: 2,
    };

    const s: any = {
      a: 'foo',
      b: ['foo'],
      c: false,
      d: 'newD',
      e: 'newE',
      g: 0,
      createdAt: 1,
      updatedAt: 2,
    };

    const r: any = mergePropsToNoValue(t, s);

    expect(r).toEqual({
      d: 'newD',
      e: 'newE',
    });
  });

  it('should not mergePropsToNoValue if source has no value', () => {
    const t: any = {
      a: 'foo',
      b: ['foo'],
      c: false,
      d: null,
      e: '',
      g: null,
      createdAt: 1,
      updatedAt: 2,
    };

    const s: any = {
      a: 'foo',
      b: ['foo'],
      c: false,
      d: 'newD',
      e: 'newE',
      g: '',
      createdAt: 1,
      updatedAt: 2,
    };

    const r: any = mergePropsToNoValue(t, s);

    expect(r).toEqual({
      d: 'newD',
      e: 'newE',
    });
  });
});
