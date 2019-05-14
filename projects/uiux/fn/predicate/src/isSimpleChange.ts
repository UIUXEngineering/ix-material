import { SimpleChanges } from '@angular/core';

export function isSimpleChange(changes: SimpleChanges, property: string) {
  return changes.hasOwnProperty(property) && (changes[property].previousValue !== changes[property].currentValue);
}
