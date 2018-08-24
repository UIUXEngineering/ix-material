/**
 * Converts `set` to an array of its values.
 *
 * @param set The set to convert.
 * Returns the values.
 */
export function setToArray(set: any): any[] {
  let index = -1;
  const result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
