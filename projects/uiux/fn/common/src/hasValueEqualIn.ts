import { getIn } from './getIn';
import { hasValueEqual } from './hasValueEqual';

export function hasValueEqualIn(
  targetValue: any,
  targetKeys: string,
  srcValue: any,
  srcKeys: string
): boolean {
  return hasValueEqual(getIn(targetValue, targetKeys), getIn(srcValue, srcKeys));
}
