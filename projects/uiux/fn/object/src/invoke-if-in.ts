/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { hasValue } from '@uiux/fn/value';
import { getIn } from './get-in';

/**
 * Call value into target function if value exists
 *
 * If you have:
 * if (target && target.prop && target.prop.prop2 {
 *    someFunction( target.prop && target.prop.prop2 );
 * }
 *
 * Then you can use:
 * invokeIfIn(target, 'prop.prop2', someFunction);
 *
 */
export function invokeIfIn(src: any, keys: string | string[], fn: Function, context: any = null) {
  const _value: any = getIn(src, keys);

  if (hasValue(_value)) {
    fn.call(context, _value);
  }
}
