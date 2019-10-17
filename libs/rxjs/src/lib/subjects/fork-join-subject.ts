/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Subject, Subscriber, Subscription, SubscriptionLike } from 'rxjs';
import { ObjectUnsubscribedError } from 'rxjs';
import { mergeWithoutArray } from '@uiux/fn';
import { allValuesHasValue } from '@uiux/fn';

export class ForkJoinSubject<T> extends Subject<T> {
  private _isPublished = false;

  constructor(private _structure: any) {
    super();
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<SubscriptionLike>subscription).closed && allValuesHasValue(this._structure)) {
      subscriber.next(this._structure);
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._structure;
    }
  }

  nextKey(key: string, value: any): void {
    this._structure[key] = value;
    this._next(this._structure);
  }

  merge(value: any): void {
    this._structure = mergeWithoutArray(this._structure, value);
    this._next(this._structure);
  }

  next(value: T): void {
    this._structure = mergeWithoutArray(this._structure, value);
    this._next(this._structure);
  }

  /**
   * Does not publish value.
   * @param val
   */
  setValue(val: T): void {
    this._structure = val;
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
    this._structure[key] = val;
  }

  setValueByKeyNext(key: string, val: T): void {
    this.setValueByKey(key, val);
    this.publish();
  }

  publish(): void {
    this.next(this._structure);
  }

  private _next(value: T): void {
    if (!this._isPublished && allValuesHasValue(this._structure)) {
      this._isPublished = true;
      super.next(value);
      super.complete();
    }
  }
}
