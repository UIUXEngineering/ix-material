/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isPlainObject } from 'lodash-es/isPlainObject';

describe('isObject', () => {
  it('true for object', () => {
    expect(isPlainObject({})).toBeTruthy();
  });

  it('false for array', () => {
    expect(isPlainObject([])).toBeFalsy();
  });

  it('false for function', () => {
    expect(
      isPlainObject(() => {
        /* noop */
      })
    ).toBeFalsy();
  });

  it('false for string', () => {
    expect(isPlainObject('foo')).toBeFalsy();
  });

  it('false for boolean', () => {
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(false)).toBeFalsy();
  });
});
