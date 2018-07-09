/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { ObjectUnsubscribedError } from 'rxjs';
import { get, merge } from '@uiux/cdk/object';
import { hasValue } from '@uiux/cdk/value';
import { default as _isEqual } from 'lodash-es/isEqual';

export class DistinctSubject<T> extends Subject<T> {
  private _isDistinct = false;

  constructor(private _previousValue: T, private key?: any) {
    super();
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed) {
      subscriber.next(this._previousValue);
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._previousValue;
    }
  }

  next(value: T): boolean {
    if (this.key && hasValue(this.key)) {
      if (hasValue(this._previousValue)) {
        this._isDistinct = get(value, this.key) !== get(this._previousValue, this.key);
        if (this._isDistinct) {
          this._previousValue = value;
          super.next((this._previousValue = value));
        }
      } else {
        this._isDistinct = true;
        this._previousValue = value;
        super.next((this._previousValue = value));
      }
    } else {
      this._isDistinct = _isEqual(value, this._previousValue) !== true;
      if (this._isDistinct) {
        this._previousValue = value;
        super.next((this._previousValue = value));
      }
    }

    return this._isDistinct;
  }

  isDistinct(value: T): boolean {
    return this.next(value);
  }

  /**
   * Does not publish value.
   * @param val
   */
  setValue(val: T): void {
    this._previousValue = val;
  }

  merge(val: T): void {
    this._previousValue = merge(this._previousValue, val);
  }

  mergeNext(val: T): void {
    this.merge(val);
    this.publish();
  }

  /**
   * Only works for objects, of course.
   * @param key
   * @param val
   */
  setValueByKey(key: string, val: T): void {
    this._previousValue[key] = val;
  }

  setValueByKeyNext(key: string, val: T): void {
    this.setValueByKey(key, val);
    this.publish();
  }

  publish(): void {
    this.next(this._previousValue);
  }
}
