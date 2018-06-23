/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as mergeWith } from 'lodash-es/mergeWith';
import { default as isArray } from 'lodash-es/isArray';
import { default as isBoolean } from 'lodash-es/isBoolean';
import { clone } from './clone';

export function mergeNoArray(target: any, source: any): any {
  return mergeWith(clone(target), clone(source), mergeCustomizer);
}

function mergeCustomizer(targetValue: any, srcValue: any): any {
  if (isArray(targetValue) || isBoolean(srcValue)) {
    return srcValue;
  }
}
