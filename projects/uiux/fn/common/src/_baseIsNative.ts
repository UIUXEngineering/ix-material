import { isFunction } from './isFunction';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
import { isObject } from './isObject';
import { isMasked } from './_isMasked';
import { toSource } from './_toSource';

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
const reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
const funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
const funcToString = funcProto.toString;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
const reIsNative = RegExp(
  '^' +
    funcToString
      .call(hasOwnProperty)
      .replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
    '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 * Returns `true` if `value` is a native function,
 *  else `false`.
 * @param value The value to check.
 */
export function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  const pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
