/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { allPropsAreTruthy } from './all-props-are-truthy';
import { default as hasIn } from 'lodash-es/hasIn';
import { default as get } from 'lodash-es/get';
import { default as forIn } from 'lodash-es/forIn';

/**
 * Return truthy of all common properties in different paths.
 * @param object
 * @param basePath is a path to an object
 * @param keyOrPath can by a property key, or path to property key
 * @returns boolean
 */
export function propTruthyInAllPaths(object: any, basePath: string, keyOrPath: string): boolean {
  const t: any = {};
  if (hasIn(object, basePath)) {
    const baseObj: any = get(object, basePath, object);

    forIn(baseObj, (o: any, oKey) => {
      // to keep unique keys for truthy object
      const concatPath = `${basePath}.${oKey}.${keyOrPath}`;
      t[concatPath] = get(o, keyOrPath);
    });

    return allPropsAreTruthy(t);
  }

  return false;
}
