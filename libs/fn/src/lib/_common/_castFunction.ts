import { identity } from './identity';

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @param value The value to inspect.
 * Returns cast function.
 */
export function castFunction(value): Function {
  return typeof value === 'function' ? value : identity;
}
