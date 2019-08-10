/**
 * Determine if similar keys in two different objects
 * have the same value.
 * @param src source _object
 * @param tar compare _object
 * @param keys keys to compare
 */
export function valuesMatch(src: any, tar: any, keys: string[]) {
  return keys.reduce((acc: boolean, key: string) => {
    if (acc) {
      return src[key] === tar[key];
    }

    return acc;
  }, true);
}
