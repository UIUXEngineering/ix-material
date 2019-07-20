import { compareAscending } from './_compareAscending';

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @param object The object to compare.
 * @param other The other object to compare.
 * @param orders The order to sort by for each property.
 */
export function compareMultiple(object, other, orders) {
  let index = -1;
  const objCriteria = object.criteria,
    othCriteria = other.criteria,
    length = objCriteria.length,
    ordersLength = orders.length;

  while (++index < length) {
    const result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      const order = orders[index];
      return result * (order === 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}
