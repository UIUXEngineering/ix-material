import { keysAreTruthyInCollection } from '../_collection/keysAreTruthyInCollection';

export function keysAreTruthyInEntity<T>(entity: { [key: string]: T }, keys: string | string[]): boolean {
  return keysAreTruthyInCollection(Object.values(entity), keys);
}
