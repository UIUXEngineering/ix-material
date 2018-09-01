/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  getDataType,
  isArrayDataType,
  isBooleanDataType,
  isNoneDataType,
  isNumberDataType,
  isObjectDataType,
  isStringDataType,
} from './data-type';
import { DATA_TYPE } from '../constants';

describe('data type', () => {
  it('is object', () => {
    const data: any = {};

    expect(getDataType(data)).toEqual(DATA_TYPE.OBJECT);
    expect(isObjectDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(false);
    expect(isArrayDataType(data)).toEqual(false);
    expect(isNumberDataType(data)).toEqual(false);
    expect(isStringDataType(data)).toEqual(false);
  });

  it('is string', () => {
    const data: any = 'foo';

    expect(getDataType(data)).toEqual(DATA_TYPE.STRING);
    expect(isStringDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(false);
    expect(isArrayDataType(data)).toEqual(false);
    expect(isNumberDataType(data)).toEqual(false);
    expect(isStringDataType(data)).toEqual(true);
  });

  it('is array', () => {
    const data: any = [];

    expect(getDataType(data)).toEqual(DATA_TYPE.ARRAY);
    expect(isArrayDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(false);
    expect(isArrayDataType(data)).toEqual(true);
    expect(isNumberDataType(data)).toEqual(false);
    expect(isStringDataType(data)).toEqual(false);
  });

  it('is boolean', () => {
    const data: any = false;

    expect(getDataType(data)).toEqual(DATA_TYPE.BOOLEAN);
    expect(isBooleanDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(true);
    expect(isArrayDataType(data)).toEqual(false);
    expect(isNumberDataType(data)).toEqual(false);
    expect(isStringDataType(data)).toEqual(false);
  });

  it('is number', () => {
    const data: any = 0;

    expect(getDataType(data)).toEqual(DATA_TYPE.NUMBER);
    expect(isNumberDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(false);
    expect(isArrayDataType(data)).toEqual(false);
    expect(isNumberDataType(data)).toEqual(true);
    expect(isStringDataType(data)).toEqual(false);
  });

  it('is none', () => {
    const data: any = null;

    expect(getDataType(data)).toEqual(DATA_TYPE.NONE);
    expect(isNoneDataType(data)).toEqual(true);
    expect(isBooleanDataType(data)).toEqual(false);
    expect(isArrayDataType(data)).toEqual(false);
    expect(isNumberDataType(data)).toEqual(false);
    expect(isStringDataType(data)).toEqual(false);
  });
});
