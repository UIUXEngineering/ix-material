/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 * Returns `true` if `value` is a prototype, else `false`.
 *
 * @param value The value to check.
 */
export function isPrototype(value) {
  const Ctor = value && value.constructor,
    proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}
