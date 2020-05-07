import { keysAreTruthyInCollection } from '../_collection/keysAreTruthyInCollection';
import { values } from '../_common/values';

export function keysAreTruthyInEntity<T>(entity: { [key: string]: T }, keys: string | string[]): boolean {
  return keysAreTruthyInCollection(values(entity), keys);
}
