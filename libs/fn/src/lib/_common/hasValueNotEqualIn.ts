import { getIn } from './getIn';
import { hasValueNotEqual } from './hasValueNotEqual';

export function hasValueNotEqualIn(
  targetValue: any,
  targetKeys: string,
  srcValue: any,
  srcKeys: string
): boolean {
  return hasValueNotEqual(getIn(targetValue, targetKeys), getIn(srcValue, srcKeys));
}
