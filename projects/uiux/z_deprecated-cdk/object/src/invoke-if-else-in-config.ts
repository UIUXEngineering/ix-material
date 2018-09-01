/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { invokeIfElseIn } from './invoke-if-else-in';

export interface IInvokeIfElseIn {
  src: any;
  keys: string | string[];
  elseValue: any;
  fn: Function;
  context?: any | null;
}

/**
 * Call value into target function if value exists
 *
 *  If you have:
 * if (target && target.prop && target.prop.prop2 {
 *    someFunction( target.prop && target.prop.prop2 );
 * } else {
 *    someFunction( defaultValue );
 * }
 *
 * Then you can use:
 * invokeIfElseIn(target, 'prop.prop2', defaultValue, someFunction);
 *
 */
export function invokeIfElseInConfig(config: IInvokeIfElseIn) {
  invokeIfElseIn(config.src, config.keys, config.elseValue, config.fn, config.context);
}
