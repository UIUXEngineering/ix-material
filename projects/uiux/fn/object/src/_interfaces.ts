export type predicateFn = (...args) => boolean;

export interface ISearchObjectByKeysResult {
  key: string;
  path: string;
  data: any;
}
