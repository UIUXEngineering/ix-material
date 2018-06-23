/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as hasIn } from 'lodash-es/hasIn';
import { default as get } from 'lodash-es/get';
import { default as forIn } from 'lodash-es/forIn';
import { allPropsHaveValue } from './all-props-have-value';

/**
 * Return truthy of all common properties in different paths.
 * @param object
 * @param basePath is a path to an object
 * @param keyOrPath can by a property key, or path to property key
 * @returns boolean
 */
export function propHasValueInAllPaths(object: any, basePath: string, keyOrPath: string): boolean {
  const t: any = {};
  if (hasIn(object, basePath)) {
    const baseObj: any = get(object, basePath, object);

    forIn(baseObj, (o: any, oKey) => {
      // to keep unique keys for truthy object
      const concatPath = `${basePath}.${oKey}.${keyOrPath}`;
      t[concatPath] = get(o, keyOrPath);
    });

    return allPropsHaveValue(t);
  }

  return false;
}
