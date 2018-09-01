/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { ObjectUnsubscribedError } from 'rxjs';
import { keySplitterIntoImmutablePath } from '@uiux/cdk/object';

// import { } from 'immutable';

export class ImmutableHashSubject<T> extends Subject<T | null> {
  private _destroyed = false;
  _path: string[] = [];
  getExternalDataFn: Function;
  setExternalDataFn: Function;

  constructor(public path: string, getDataFn?: Function, setDataFn?: Function) {
    super();

    if (getDataFn) {
      this.getExternalDataFn = getDataFn;
    }

    if (setDataFn) {
      this.setExternalDataFn = setDataFn;
    }

    this.setPath(path);
  }

  setPath(path: string) {
    this._path = keySplitterIntoImmutablePath(path);
  }

  getPath(): string[] {
    return this._path;
  }

  get value(): T | null {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T | null>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (!this.getExternalDataFn) {
      throw new Error('Missing reference function.');
    } else if (subscription && !(<ISubscription>subscription).closed) {
      subscriber.next(this.getValue());
    }
    return subscription;
  }

  getValue(): T | null {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    }

    if (this._destroyed) {
      return null;
    } else if (!this.getExternalDataFn) {
      throw new Error('Missing reference function.');
    } else {
      let value: any = this._getStore().getIn(this._path, null);
      if (value && value.toJS) {
        value = value.toJS();
      }
      return value;
    }
  }

  setValue(value: T): void {
    if (this.setExternalDataFn && this.getExternalDataFn) {
      // get external immutable data object
      const dataObject: any = this._getStore();

      // console.log(this._path, value);

      // set new value
      const newDataObject: any = dataObject.setIn(this._path, value);

      // set external data object
      this._setStore(newDataObject);
    }
    // super.next(this.getValue());
  }

  next(value: T | null): void {
    if (!this._destroyed) {
      super.next(value);
    }
  }

  getExternalData(fn: Function): void {
    this.getExternalDataFn = fn;
  }

  update(): void {
    // console.log('update');
    // console.log(this._path);
    // console.log(this._getStore().toJS());
    if (this.getExternalDataFn) {
      super.next(this._getStore().getIn(this._path, null));
    }
  }

  destroy(): void {
    this._destroyed = true;
    this.next(null);
    this.complete();
  }

  private _getStore(): any {
    if (this.getExternalDataFn) {
      return this.getExternalDataFn.call(null, null);
    }
  }

  private _setStore(data: any): any {
    if (this.setExternalDataFn) {
      this.setExternalDataFn.call(null, data);
    }
  }
}
