import { baseGet } from './_baseGet';

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @param path {Array|string} path The path of the property to get.
 * Returns the new accessor function.
 */
export function basePropertyDeep(path: any[] | string): Function {
  return function(object) {
    return baseGet(object, path);
  };
}
