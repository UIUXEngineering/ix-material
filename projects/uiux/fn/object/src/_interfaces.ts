export type predicateFn = (...args) => boolean;

export interface IFindPropertiesResult {
  key: string;
  path: string;
  data: any;
}
