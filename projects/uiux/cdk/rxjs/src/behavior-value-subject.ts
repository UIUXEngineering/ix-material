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
import { clone, getIn, setIn } from '@uiux/cdk/object';

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
      this._value = clone(value);
      super.next(this._value );
    }
  }

  nextDefined(value: T): void {
    if (isDefined(value)) {
      this._value = clone(value);
      super.next(this._value);
    }
  }

  /**
   * Does not publish value.
   * @param val
   * @param publish
   */
  setValue(val: T, publish = true): void {
    this._value = clone(val);

    if (publish) {
      this.publish();
    }
  }

  merge(val: T, publish = true): void {
    this._value = merge(this._value, clone(val));

    if (publish) {
      this.publish();
    }
  }

  /**
   * Only works for objects, of course.
   * @param key
   * @param val
   * @param publish
   */
  setValueByKey(key: string, val: any, publish = true): void {
    this._value[key] = clone(val);

    if (publish) {
      this.publish();
    }
  }

  getValueByKey(key: string): any {
    return this._value[key];
  }

  getIn(key: string | string[]): any {
    return getIn(this._value, key);
  }

  setIn(key: string | string[], val: any, publish = true): void {
    setIn(this._value, key, clone(val));

    if (publish) {
      this.publish();
    }
  }

  setValueByKeyNext(key: string, val: any, publish = true): void {
    this.setValueByKey(key, clone(val));

    if (publish) {
      this.publish();
    }
  }

  publish(): void {
    this.next(this._value);
  }
}
