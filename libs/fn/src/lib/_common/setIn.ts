import { baseSet } from './_baseSet';

/**
 * Sets the value at `path` of `_object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `_object`.
 *
 * @param object The _object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * Returns `_object`.
 *
 * var _object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(_object, 'a[0].b.c', 4);
 * console.log(_object.a[0].b.c);
 * // => 4
 *
 * _.set(_object, ['x', '0', 'y', 'z'], 5);
 * console.log(_object.x[0].y.z);
 * // => 5
 */
export function setIn(object: any, path: string[] | string, value: any): any {
  return object == null ? object : baseSet(object, path, value);
}
