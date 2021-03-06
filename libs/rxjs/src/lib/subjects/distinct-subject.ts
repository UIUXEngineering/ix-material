/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Subject, Subscriber, Subscription, SubscriptionLike } from 'rxjs';
import { ObjectUnsubscribedError } from 'rxjs';
import { getIn, mergeWithoutArray, hasValue, isEqual } from '@uiux/fn';

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
    if (subscription && !(<SubscriptionLike>subscription).closed) {
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
        this._isDistinct = getIn(value, this.key) !== getIn(this._previousValue, this.key);
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
      this._isDistinct = isEqual(value, this._previousValue) !== true;
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
    this._previousValue = mergeWithoutArray(this._previousValue, val);
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
