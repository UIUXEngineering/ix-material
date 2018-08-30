import { isObject } from './isObject';

/** Built-in value references. */
const objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @param proto The object to inherit from.
 * Returns the new object.
 */
export const baseCreate: any = (function() {
  function object() {}
  return function(proto: any) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    const result = new object();
    object.prototype = undefined;
    return result;
  };
})();
