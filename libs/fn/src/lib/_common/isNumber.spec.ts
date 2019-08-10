/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isNumber } from './isNumber';

describe('isNumber', () => {
  it('should return true when passing correct numeric _string', () => {
    expect(isNumber(2)).toBe(true);
  });

  it('should return true when passing correct double _string', () => {
    expect(isNumber(1.123)).toBe(true);
  });

  it('should return true when passing correct negative _string', () => {
    expect(isNumber(-2)).toBe(true);
  });

  it('should return true when passing correct scientific notation _string', () => {
    expect(isNumber(1e5)).toBe(true);
  });

  it('should return false when passing incorrect numeric', () => {
    expect(isNumber('a')).toBe(false);
  });

  it('should return false when passing parseable but non numeric', () => {
    expect(isNumber('2a')).toBe(false);
  });

  it('should return true when passing octal', () => {
    expect(isNumber(0x12345)).toBe(true);
  });
});
