/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { deleteIn } from '@uiux/fn/object';
import { clone, getIn, setIn, mergeIn, isDefined, mergeWithoutArray } from '@uiux/fn/common';
import { ObjectUnsubscribedError } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';

export class BehaviorDefinedSubject<T> extends Subject<T> {
  private _value: T;

  constructor(initialValue?: any) {
    super();
    if (isDefined(initialValue)) {
      this._value = initialValue;
    }
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<ISubscription>subscription).closed && isDefined(this._value)) {
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

  merge(val: T | any, publish = true): void {
    this._value = mergeWithoutArray(this._value, clone(val));

    if (publish) {
      this.publish();
    }
  }

  mergeIn(keys: string | string[] | null, value: any, publish = true): void {
    this._value = mergeIn(this._value, keys, clone(value));

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

  /**
   * Delete object or array in stored value
   * @param key
   * @param publish
   */
  deleteIn(key: string | string[], publish = true): void {
    this._value = deleteIn(this._value, key);

    if (publish) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  nullKey(key: string, publish = true): void {
    this._value[key] = null;

    if (publish) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  undefineKey(key: string, publish = true): void {
    this._value[key] = undefined;

    if (publish) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  nullIn(key: string | string[], publish = true): void {
    setIn(this._value, key, null);

    if (publish) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  undefineIn(key: string | string[], publish = true): void {
    setIn(this._value, key, undefined);

    if (publish) {
      this.publish();
    }
  }

  publish(): void {
    this.next(this._value);
  }
}
