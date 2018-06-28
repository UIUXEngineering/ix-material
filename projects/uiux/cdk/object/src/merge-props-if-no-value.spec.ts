/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { mergePropsIfNoValue } from './merge-props-if-no-value';

describe('mergePropsIfNoValue', () => {
  it('should mergePropsIfNoValue if source has value', () => {
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

    const r: any = mergePropsIfNoValue(t, s);

    expect(r).toEqual(jasmine.objectContaining({
                                                 d: 'newD',
                                                 e: 'newE',
                                               }));
  });

  it('should not mergePropsIfNoValue if source has no value', () => {
    const t: any = {
      a: 'foo',
      b: ['foo'],
      c: false,
      d: null,
      e: '',
      g: null, // no value
      createdAt: 1,
      updatedAt: 2,
    };

    const s: any = {
      a: 'bar',
      b: ['foo'],
      c: false,
      d: 'newD',
      e: 'newE',
      g: '',
      createdAt: 1,
      updatedAt: 2,
    };

    const r: any = mergePropsIfNoValue(t, s);

    expect(r).toEqual(jasmine.objectContaining({
      d: 'newD',
      e: 'newE',
    }));
  });
});
