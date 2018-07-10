/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { clone, getIn, merge, setIn } from '@uiux/cdk/object';
import { ObjectUnsubscribedError } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { ISubscription, Subscription } from 'rxjs/Subscription';

export class BehaviorStoreSubject<T> extends Subject<T> {
  constructor( private _value: T ) {
    super();
  }

  get value(): T {
    return this.getValue();
  }

  _subscribe( subscriber: Subscriber<T> ): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if ( subscription && !(<ISubscription>subscription).closed ) {
      subscriber.next(this._value);
    }
    return subscription;
  }

  getValue(): T {
    if ( this.hasError ) {
      throw this.thrownError;
    } else if ( this.closed ) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  }

  next( value: T ): void {
    this._value = clone(value);
    super.next(this._value);
  }

  /**
   * Does not publish value.
   * @param val
   * @param publish
   */
  setValue( val: T, publish = true ): void {
    this._value = clone(val);

    if ( publish ) {
      this.publish();
    }
  }

  merge( val: T, publish = true ): void {
    this._value = merge(this._value, clone(val));

    if ( publish ) {
      this.publish();
    }
  }

  /**
   * Only works for objects, of course.
   * @param key
   * @param val
   * @param publish
   */
  setValueByKey( key: string, val: any, publish = true ): void {
    this._value[ key ] = clone(val);

    if ( publish ) {
      this.publish();
    }
  }

  getValueByKey( key: string ): any {
    return this._value[ key ];
  }

  getIn( key: string | string[] ): any {
    return getIn(this._value, key);
  }

  setIn( key: string | string[], val: any, publish = true ): void {
    setIn(this._value, key, clone(val));

    if ( publish ) {
      this.publish();
    }
  }

  setValueByKeyNext( key: string, val: any, publish = true ): void {
    this.setValueByKey(key, clone(val));

    if ( publish ) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  nullKey( key: string, publish = true ): void {
    this._value[ key ] = null;

    if ( publish ) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  undefineKey( key: string, publish = true ): void {
    this._value[ key ] = undefined;

    if ( publish ) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  nullIn( key: string | string[], publish = true ): void {
    setIn(this._value, key, null);

    if ( publish ) {
      this.publish();
    }
  }

  /**
   *
   * @param key
   * @param publish
   */
  undefineIn( key: string | string[], publish = true ): void {
    setIn(this._value, key, undefined);

    if ( publish ) {
      this.publish();
    }
  }

  publish(): void {
    this.next(this._value);
  }
}
