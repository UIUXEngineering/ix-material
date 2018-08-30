/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { convertToNumber } from './_internal';
import { isNumber } from './isNumber';

describe('convertToNumber', () => {
  it('should create', () => {
    expect(isNumber(convertToNumber('-1'))).toBeTruthy();
  });

  it('should create', () => {
    expect(isNumber(convertToNumber('1'))).toBeTruthy();
  });
});
