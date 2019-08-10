/** Used to detect hot functions by _number of calls within a span of milliseconds. */
const HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @param func The function to restrict.
 * Returns the new shortable function.
 */
export function shortOut(func): Function {
  let count = 0;
  let lastCalled = 0;

  return function() {
    const stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
