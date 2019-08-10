import { MapCache } from './_MapCache';

/** Error message constants. */
const FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @category Function
 * @param func The function to have its output memoized.
 * @param resolver The function to resolve the cache key.
 * @returns Returns the new memoized function.
 *
 * var _object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(_object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * _object.a = 2;
 * values(_object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(_object, ['a', 'b']);
 * values(_object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
export function memoize(func: Function, resolver: Function): Function {
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  const memoized: any = function(): any {
    const args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result: any = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new ((<any>memoize).Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
(<any>memoize).Cache = MapCache;
