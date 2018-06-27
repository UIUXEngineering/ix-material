/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { ObjectUnsubscribedError } from 'rxjs';
import { merge } from '@uiux/cdk/object';

export class BehaviorStoreSubject<T> extends Subject<T> {
  constructor(private _value: T) {
    super();
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed) {
      subscriber.next(this._value);
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  }

  setValue(value: T): void {
    this._value = value;
  }

  mergeValue(value: T): void {
    this._value = merge(this._value, value);
  }

  publishStore(): void {
    super.next(this._value);
  }

  next(value: T): void {
    super.next((this._value = value));
  }
}
