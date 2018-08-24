/**
 * Converts `map` to its key-value pairs.
 *
 * @param map The map to convert.
 * Returns the key-value pairs.
 */
export function mapToArray(map: any): any[] {
  let index = -1;
  const result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
