/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IFindPropertiesResult } from './interfaces';
import { findProperties } from './find-properties';

/**
 * Only return data
 * @param node
 * @param searchParam
 * @param path
 */
export function findPropertyData(node: any, searchParam: any, path: string = ''): any[] {
  return findProperties(node, searchParam, path).reduce((acc: any, item: IFindPropertiesResult) => {
    acc.push(item.data);
    return acc;
  }, []);
}
