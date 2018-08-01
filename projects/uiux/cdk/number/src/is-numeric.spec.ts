/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isNumber } from './is-number';

describe('isNumber', () => {
  it('should return true when passing correct numeric string', () => {
    expect(isNumber('2')).toBe(true);
  });

  it('should return true when passing correct double string', () => {
    expect(isNumber('1.123')).toBe(true);
  });

  it('should return true when passing correct negative string', () => {
    expect(isNumber('-2')).toBe(true);
  });

  it('should return true when passing correct scientific notation string', () => {
    expect(isNumber('1e5')).toBe(true);
  });

  it('should return false when passing incorrect numeric', () => {
    expect(isNumber('a')).toBe(false);
  });

  it('should return false when passing parseable but non numeric', () => {
    expect(isNumber('2a')).toBe(false);
  });

  it('should return true when passing octal', () => {
    expect(isNumber('0x12345')).toBe(true);
  });
});
