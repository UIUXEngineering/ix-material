import { isEmpty, isPlainObject } from '@uiux/fn/common';

export type predicateFn = (...args) => boolean;

export function allValuesDefined(
  object: any,
  keyOrFunctioh: string | Function,
  fn?: predicateFn,
  context?: any
): boolean {
  return true;
}
