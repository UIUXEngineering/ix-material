import { assignValue } from './_assignValue';
import { baseAssignValue } from './_baseAssignValue';

/**
 * Copies properties of `source` to `object`.
 *
 * @param source The object to copy properties from.
 * @param props The property identifiers to copy.
 * @param object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * Returns `object`.
 */
export function copyObject(source: any, props: any, object: any = {}, customizer?: Function): any {
  const isNew = !object;

  let index = -1;
  const length = props.length;

  while (++index < length) {
    const key = props[index];

    let newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
