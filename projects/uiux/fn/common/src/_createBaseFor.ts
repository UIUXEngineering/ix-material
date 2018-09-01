/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @param fromRight Specify iterating from right to left.
 * @returns Returns the new base function.
 */
export function createBaseFor(fromRight?: boolean): Function {
  return function(object, iteratee, keysFunc) {
    let index = -1;
    const iterable = Object(object),
      props = keysFunc(object);
    let length = props.length;

    while (length--) {
      const key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
