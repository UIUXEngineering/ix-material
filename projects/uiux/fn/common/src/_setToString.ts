import { baseSetToString } from './_baseSetToString';
import { shortOut } from './_shortOut';

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @param func The function to modify.
 * @param string The `toString` result.
 * Returns `func`.
 */
export const setToString: Function = shortOut(baseSetToString);
