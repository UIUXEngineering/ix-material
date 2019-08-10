import { baseMerge } from './_baseMerge';
import { createAssigner } from './_createAssigner';

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable _string keyed properties of source objects into the
 * destination _object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain _object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `_object`.
 *
 * @param _object The destination _object.
 * @param source {...Object} [sources] The source objects.
 * Returns `_object`.
 *
 * var _object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(_object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
export const merge = createAssigner(function(object: any, source: any, srcIndex?: number): any {
  baseMerge(object, source, srcIndex);
});
