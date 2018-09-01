/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { HashStore } from './hash-store';
import { Action } from './action';
import { IReducerConfig, IReducers, IStoreConfig, ITransformConfig } from './interfaces';
import { default as reduce } from 'lodash-es/reduce';
import { TransformSubject } from './transform-subject';
import { getIn, invokeIfIn, merge } from '@uiux/cdk/object';
import { hasValue } from '@uiux/cdk/value';

/**
 * S = State data structure ( Initial State ) interface
 * A = Action Interface
 * T = Transform Interface
 */
export class StoreSubject<S, A = any, T = any> extends HashStore<S> {
  actionCreater: Function | null;
  reducer: IReducers<A> = {};
  action: any = {};
  transforms: { [key: string]: TransformSubject<T> } = {};

  constructor(private _configInjected?: IStoreConfig) {
    super(_configInjected);
    this._boot();
  }

  private _boot() {
    this.actionCreater = getIn(this._configInjected, 'actionCreater', null);

    invokeIfIn(this._configInjected, 'rootReducer', this.addReducerConfig, this);
    invokeIfIn(this._configInjected, 'transforms', this.addTransformConfig, this);
  }

  addReducerConfig(_reducerConfig: IReducerConfig) {
    reduce(
      _reducerConfig,
      (reducerDict: any, _reducer: any, reducerKey: string) => {
        reducerDict[reducerKey] = new Action(this.reducerWrapper(_reducer));
        return reducerDict;
      },
      this.reducer
    );

    reduce(
      this.reducer,
      (actionDict: any, _actionClass: Action<A>, reducerKey: string) => {
        actionDict[reducerKey] = (_action?: A) => {
          _actionClass.action(_action);
        };
        return actionDict;
      },
      this.action
    );
  }

  reduceApply(_reducer: Function, _action: A): void {
    this.next(_reducer.apply(null, [this.getValue(), _action]));
  }

  update(_data: any): void {
    this.next(merge(this.getValue(), _data));
  }

  createAction(_type: string, _payload?: any): any {
    if (this.actionCreater) {
      return this.actionCreater.apply(null, [_type, _payload]);
    } else {
      return {
        type: _type,
        payload: _payload,
      };
    }
  }

  createCustomAction(...rest): any {
    if (this.actionCreater) {
      return this.actionCreater.apply(null, [...rest]);
    } else {
      return null;
    }
  }

  private addTransformConfig(_transformConfig: { [key: string]: ITransformConfig<T> }): void {
    reduce(
      _transformConfig,
      (transformDict: any, _transformMap: any, transformKey: string) => {
        transformDict[transformKey] = new TransformSubject(_transformMap, this);
        transformDict[transformKey]._addHash(this._hash);
        return transformDict;
      },
      this.transforms
    );
  }

  /**
   * Do not create a TransformSubject Manually
   * @param key string
   * @param config ITransformConfig
   * @returns TransformSubject
   */
  transform(key: string, config?: ITransformConfig<T>): TransformSubject<T> {
    if (!this.transforms[key]) {
      if (config && hasValue(config)) {
        this.addTransformConfig({
          [key]: config,
        });
      } else {
        throw new Error(
          'A config of ITransformConfig interface is' + ' required to create new transform'
        );
      }
    }

    return this.transforms[key];
  }

  private reducerWrapper(_reducer: Function): Function {
    return (_action: A) => {
      this.reduceApply(_reducer, _action);
    };
  }
}
