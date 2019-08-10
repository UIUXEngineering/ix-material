/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isInteger } from './isInteger';

describe('isInteger', () => {
  it('postive integer', () => {
    expect(isInteger(10)).toBeTruthy();
  });

  it('postive integer as tring', () => {
    expect(isInteger('10')).toBeTruthy();
  });

  it('negative integer', () => {
    expect(isInteger(-10)).toBeTruthy();
  });

  it('negative integer as _string', () => {
    expect(isInteger('-10')).toBeTruthy();
  });

  it('postive decimal', () => {
    expect(isInteger(10.23)).toBeFalsy();
  });

  it('postive decimal as _string', () => {
    expect(isInteger('10.23')).toBeFalsy();
  });

  it('negative decimal', () => {
    expect(isInteger(-10.23)).toBeFalsy();
  });

  it('negative decimal as _string', () => {
    expect(isInteger('-10.23')).toBeFalsy();
  });

  it('hexdecimal', () => {
    expect(isInteger('#aa00cc')).toBeFalsy();
  });

  it('octal', () => {
    expect(isInteger('0xaa00cc')).toBeTruthy();
  });
});
