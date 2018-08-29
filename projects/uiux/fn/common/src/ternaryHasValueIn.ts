/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { getIn } from './getIn';
import { ternaryHasValue } from './ternaryHasValue';

/**
 * Return value of nested node if node has a value,
 * else return conditional value.
 *
 * ternaryIn(object: 'prop1.prop2[0].prop3', alternateValue);
 */
export function ternaryHasValueIn(object: any, keys: string | string[], elseValue): any {
  // getIn or get Will return value of any key defined
  // even if value is null or undefined
  return ternaryHasValue(getIn(object, keys), elseValue);
}
