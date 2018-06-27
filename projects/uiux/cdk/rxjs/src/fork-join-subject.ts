/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Subject } from 'rxjs/Subject';
import { ObjectUnsubscribedError } from 'rxjs';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { allPropsHaveValue, merge } from '@uiux/cdk/object';

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
    if (
      subscription &&
      !(<ISubscription>subscription).closed &&
      allPropsHaveValue(this._structure)
    ) {
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

  mergeValue(value: any): void {
    this._structure = merge(this._structure, value);
    this._next(this._structure);
  }

  next(value: T): void {
    this._structure = merge(this._structure, value);
    this._next(this._structure);
  }

  private _next(value: T): void {
    if (!this._isPublished && allPropsHaveValue(this._structure)) {
      this._isPublished = true;
      super.next(value);
      super.complete();
    }
  }
}
