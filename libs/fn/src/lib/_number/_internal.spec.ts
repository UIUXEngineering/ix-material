/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isNumber } from '../_common/isNumber';
import { convertToNumber } from './_internal';

describe('convertToNumber', () => {
  it('should create', () => {
    expect(isNumber(convertToNumber('-1'))).toBeTruthy();
  });

  it('should create', () => {
    expect(isNumber(convertToNumber('1'))).toBeTruthy();
  });
});
