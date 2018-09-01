/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isArray } from './isArray';
import { isBoolean } from './isBoolean';
import { clone } from './clone';
import { mergeWith } from './mergeWith';

export function mergeWithoutArray(target: any, source: any): any {
  return mergeWith(clone(target), clone(source), mergeCustomizer);
}

function mergeCustomizer(targetValue: any, srcValue: any): any {
  if (isArray(targetValue) || isBoolean(srcValue)) {
    return srcValue;
  }
}
