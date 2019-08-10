import { baseGetTag } from './_baseGetTag';
import { isObject } from './isObject';

/** `Object#toString` result references. */
const asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` _object.
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 * @param value
 */
export function isFunction(value: any): boolean {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag: string = baseGetTag(value);
  return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}
