/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Action } from './action';

export interface IReducerConfig {
  [key: string]: Function;
}

export interface ITransformConfig<T> {
  [key: string]: T;
}

export interface IReducers<A> {
  [key: string]: Action<A>;
}

export interface IStoreConfig<T = any> {
  rootReducer?: IReducerConfig;
  record?: boolean;
  actionCreater?: Function;
  initialStore?: any;
  transforms?: ITransformConfig<T>;
  hash?: boolean;
}
