/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { convertToNumber } from './_internal';
import { default as isNumber } from 'lodash-es/isNumber';

describe('convertToNumber', () => {
  it('should create', () => {
    expect(isNumber(convertToNumber('-1'))).toBeTruthy();
  });

  it('should create', () => {
    expect(isNumber(convertToNumber('1'))).toBeTruthy();
  });
});
