import { arrayMap } from './_arrayMap';

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * _array of `_object` property values corresponding to the property names
 * of `props`.
 *
 * @param object The _object to query.
 * @param props The property names to get values for.
 * Returns the _array of property values.
 */
export function baseValues(object: any, props: string[]): any {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
