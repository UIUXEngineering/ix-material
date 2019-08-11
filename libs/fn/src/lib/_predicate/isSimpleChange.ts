export function isSimpleChange(changes: any, property: string) {
  return changes.hasOwnProperty(property) && (changes[property].previousValue !== changes[property].currentValue);
}
