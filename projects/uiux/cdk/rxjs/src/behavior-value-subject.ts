/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Subject } from 'rxjs/Subject';
import { ObjectUnsubscribedError } from 'rxjs';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { isDefined } from '@uiux/cdk/object';
import { hasValue } from '@uiux/cdk/value';

export class BehaviorValueSubject<T> extends Subject<T> {
  private _value: T;

  constructor(initialValue?: any) {
    super();
    if (hasValue(initialValue)) {
      this._value = initialValue;
    }
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed && hasValue(this._value)) {
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

  next(value: T): void {
    if (hasValue(value)) {
      super.next((this._value = value));
    }
  }

  nextDefined(value: T): void {
    if (isDefined(value)) {
      super.next((this._value = value));
    }
  }
}
