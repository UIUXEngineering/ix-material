import { isDefined } from '../_common/isDefined';
import { isNumber } from '../_common/isNumber';

export function atLeast(min: number): (val: number) => number {
  if (!isDefined(min) || !isNumber(min)) {
    throw new Error('min provided must be a _number');
  }
  return function(val: number): number {
    if (!isDefined(val) || !isNumber(val)) {
      throw new Error('Value provided must be a _number');
    }

    return val > min ? val : min;
  };
}
