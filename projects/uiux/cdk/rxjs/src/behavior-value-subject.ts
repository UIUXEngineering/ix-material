/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Subject } from 'rxjs/Subject';
import { ObjectUnsubscribedError } from 'rxjs';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { hasValue, isDefined } from '@uiux/cdk/value';
import { merge } from '@uiux/cdk/object';

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

  /**
   * Does not publish value.
   * @param val
   */
  setValue(val: T): void {
    this._value = val;
  }

  merge(val: T): void {
    this._value = merge(this._value, val);
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
    this._value[key] = val;
  }

  setValueByKeyNext(key: string, val: T): void {
    this.setValueByKey(key, val);
    this.publish();
  }

  publish(): void {
    this.next(this._value);
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
