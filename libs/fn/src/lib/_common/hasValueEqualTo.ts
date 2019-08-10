import { getIn } from './getIn';
import { hasValueEqual } from './hasValueEqual';

export function hasValueEqualTo(targetValue: any, targetKeys: string, value: any): boolean {
  return hasValueEqual(getIn(targetValue, targetKeys), value);
}
