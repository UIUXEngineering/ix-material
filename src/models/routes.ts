import { TabItem } from '../app/shared/util-components/tab-group/tab-item';

export interface IDataItem {
  base: string; // route base
  desc: string;
  file?: string;
  githubSpec: string;
  icon: string;
  name: string;
  route: string;
  seeAlso: string[];
  search: string;
  tabItem?: TabItem;
  version: string;
}

export interface IRoute {
  cdk: { [category: string]: { [item: string]: IDataItem } };
  material: { [category: string]: { [item: string]: IDataItem } };
  guides: { [category: string]: { [item: string]: IDataItem } };
  icons: { [category: string]: { [item: string]: IDataItem } };
  poc: { [category: string]: { [item: string]: IDataItem } };
  themes: { [category: string]: { [item: string]: IDataItem } };
}
