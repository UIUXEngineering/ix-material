import { coreJsData } from './_coreJsData';

/** Used to detect methods masquerading as native. */
const maskSrcKey = (function() {
  const uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
})();

/**
 * Checks if `func` has its source masked.
 *
 * Returns `true` if `func` is masked, else `false`.
 * @param  func The function to check.
 */
export function isMasked(func: (arg: any) => any): boolean {
  return !!maskSrcKey && maskSrcKey in func;
}
