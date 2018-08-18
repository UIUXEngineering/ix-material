/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as _isArray } from 'lodash-es/isArray';
import { default as _isBoolean } from 'lodash-es/isBoolean';
import { default as _isString } from 'lodash-es/isString';
import { default as _isPlainObject } from 'lodash-es/isPlainObject';
import { DATA_TYPE } from '../constants';
import { isNumber } from '@uiux/fn/number';

export function isNumberDataType(value: any): boolean {
  return isNumber(value);
}

export function isArrayDataType(value: any): boolean {
  return _isArray(value);
}

export function isBooleanDataType(value: any): boolean {
  return _isBoolean(value);
}

export function isStringDataType(value: any): boolean {
  return _isString(value);
}

export function isObjectDataType(value: any): boolean {
  return _isPlainObject(value);
}

export function isNoneDataType(value: any): boolean {
  return getDataType(value) === DATA_TYPE.NONE;
}

export function getDataType(value: any): string {
  if (isObjectDataType(value)) {
    return DATA_TYPE.OBJECT;
  }

  if (isStringDataType(value)) {
    return DATA_TYPE.STRING;
  }

  if (isBooleanDataType(value)) {
    return DATA_TYPE.BOOLEAN;
  }

  if (isArrayDataType(value)) {
    return DATA_TYPE.ARRAY;
  }

  if (isNumber(value)) {
    return DATA_TYPE.NUMBER;
  }

  return DATA_TYPE.NONE;
}

export function getResetValue(type: string | null): any {
  if (type === DATA_TYPE.ARRAY) {
    return [];
  } else if (type === DATA_TYPE.STRING) {
    return '';
  } else if (type === DATA_TYPE.NUMBER) {
    return null;
  } else if (type === DATA_TYPE.BOOLEAN) {
    return null;
  } else if (type === DATA_TYPE.OBJECT) {
    return {};
  } else {
    return null;
  }
}
