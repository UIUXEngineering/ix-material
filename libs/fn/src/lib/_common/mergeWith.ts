import { baseMerge } from './_baseMerge';
import { createAssigner } from './_createAssigner';

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, _object, source, stack).
 *
 * **Note:** This method mutates `_object`.
 *
 * @param _object The destination _object.
 * @param sources The source objects. {...Object}
 * @param customizer The function to customize assigned values.
 * Returns `_object`.
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var _object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(_object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
export const mergeWith = createAssigner(function(
  object: any,
  source: any,
  srcIndex: number,
  customizer: Function
): any {
  baseMerge(object, source, srcIndex, customizer);
});
