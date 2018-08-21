import { assignValue } from './_assignValue';
import { castPath } from './_castPath';
import { isIndex } from './_isIndex';
import { isObject } from './isObject';
import { toKey } from './_toKey';

export type customizerFn = (objValue: any, key: string, nested: any) => any;

/**
 * The base implementation of `_.set`.
 *
 * @param object The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @param customizer The function to customize path creation.
 * Returns `object`.
 */
export function baseSet<T>(
  object: T,
  path: string[] | string,
  value: any,
  customizer?: customizerFn
): T {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  let index = -1;
  const length = path.length,
    lastIndex = length - 1;
  let nested = object;

  while (nested != null && ++index < length) {
    const key = toKey(path[index]);
    let newValue = value;

    if (index !== lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
