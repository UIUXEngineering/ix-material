import { isArrayLike } from './isArrayLike';

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @param eachFunc {Function} eachFunc The function to iterate over a collection.
 * @param fromRight {boolean} [fromRight] Specify iterating from right to left.
 * Returns the new base function.
 */
export function createBaseEach(eachFunc: Function, fromRight?: boolean): Function {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    const length = collection.length;
    let index = fromRight ? length : -1;
    const iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
