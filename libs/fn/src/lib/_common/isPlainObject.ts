import { baseGetTag } from './_baseGetTag';
import { getPrototype } from './_getPrototype';
import { isObjectLike } from './isObjectLike';

/** `Object#toString` result references. */
const objectTag = '[object Object]';

/** Used for built-in method references. */
const funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
const funcToString = funcProto.toString;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
const objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain _object, that is, an _object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * Returns `true` if `value` is a plain _object, else `false`.
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 *
 * @param value: any value
 */
export function isPlainObject(value: any): boolean {
  if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
    return false;
  }
  const proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    funcToString.call(Ctor) === objectCtorString
  );
}
