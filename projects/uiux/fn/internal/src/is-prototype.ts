/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 *
 *  value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
export function isPrototype(value) {
  const Ctor = value && value.constructor,
    proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}
