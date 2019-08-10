/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { forIn } from '../_common/forIn';
import { getIn } from '../_common/getIn';
import { hasIn } from '../_common/hasIn';
import { allValuesHasValue } from './allValuesHasValue';

/**
 * In an _object that has nested nodes of a _common interface,
 * Return truthy of all _common properties hasValue.
 *
 * @param object
 * @param basePath is a path to an _object and may be a path such as 'a.b.c[0]' etc.
 * @param keyOrPath can by a property key, or path to property key
 */
export function interfaceHasValueIn(object: any, basePath: string, keyOrPath: string): boolean {
  const t: any = {};
  if (hasIn(object, basePath)) {
    const baseObj: any = getIn(object, basePath, object);

    forIn(baseObj, (o: any, oKey) => {
      // to keep unique keys for truthy _object
      const concatPath = `${basePath}.${oKey}.${keyOrPath}`;
      t[concatPath] = getIn(o, keyOrPath);
    });

    return allValuesHasValue(t);
  }

  return false;
}
