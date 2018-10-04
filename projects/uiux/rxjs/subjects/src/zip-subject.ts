import { clone, hasValue, isScalar, isArray, isString } from '@uiux/fn/common';
import { keySplitterIntoImmutablePath, allValuesHasValue, allValuesDefined } from '@uiux/fn/object';
import { fromJS } from 'immutable';
import { default as _filter } from 'lodash-es/filter';
import { default as _uniqBy } from 'lodash-es/uniqBy';
import { ObjectUnsubscribedError, Subscriber, Subscription, SubscriptionLike } from 'rxjs';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface IZipSubjectObservableOptions {
  take: number;
}

export interface IZipSubjectConfig {
  /**
   * Once all props have value and published,
   * all props are set back to null,
   * requiring all props to pass a hasValue check
   * again.
   */
  reset?: boolean;

  /**
   * All props must pass a hasValue check
   * to publish
   */
  allPropsHaveValue?: boolean;

  /**
   * all props must not be null or undefined,
   * but do NOT have to pass a hasValue check.
   */
  allPropsAreDefined?: boolean;

  /**
   * will publish store even if any prop does not
   * pass hasValue check.
   */
  subscribeToRawStore?: boolean;
}

export const defaultZipSubjectConfig: IZipSubjectConfig = {
  reset: false,
  allPropsHaveValue: true,
  allPropsAreDefined: false,
  subscribeToRawStore: false,
};

/**
 * @deprecated use BehaviorKeysSubject
 */
export class ZipSubject<T> extends Subject<T> {
  private _structureKeys: string[] = [];
  private _keySubscribers: any = {};
  private _value: any;

  constructor(
    private _structureMap: T = <T>{},
    private _config: IZipSubjectConfig = defaultZipSubjectConfig
  ) {
    super();
    _config.allPropsHaveValue = hasValue(_config.allPropsHaveValue)
      ? _config.allPropsHaveValue
      : true;
    this._value = fromJS(clone(this._structureMap));
    this._structureKeys = Object.keys(_structureMap);
  }

  get value(): T {
    return this.getValue();
  }

  getInitialStore(): T {
    return fromJS(clone(this._structureMap)).toJS();
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<SubscriptionLike>subscription).closed) {
      const _value = this._value.toJS();

      if (this._config.subscribeToRawStore) {
        subscriber.next(_value);
      } else if (this._config.allPropsAreDefined) {
        if (allValuesDefined(_value)) {
          subscriber.next(_value);
        }
      } else if (this._config.allPropsHaveValue) {
        if (allValuesHasValue(_value)) {
          subscriber.next(_value);
        }
      } else {
        subscriber.next(_value);
      }
    }
    return subscription;
  }

  reset(): void {
    this._value = fromJS(clone(this._structureMap));
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._value.toJS();
    }
  }

  setKey(key: string | string[], value: any, publish = true): void {
    this._value = this._value.setIn(this._immutableKey(key), this._immutableValue(value));

    if (publish) {
      this.publish();
    }
  }

  pushKey(key: string, value: any, uniqBy?: any): void {
    const _key: any[] = keySplitterIntoImmutablePath(key);
    let _value: any = this._value.getIn(_key);
    _value = _value ? _value : [];

    if (_value.hasOwnProperty('toJS')) {
      _value = _value.toJS();
    }

    if (isArray(value)) {
      _value = _value.concat(value);
    } else {
      _value.push(value);
    }

    if (uniqBy) {
      if (isString(uniqBy)) {
        // in some cases, uniqBy will drop objects that do not
        // contain the property evaluated for uniq.
        // save those objects.
        const _notContainProp: any[] = _filter(_value, (_item: any) => {
          return _item && !_item.hasOwnProperty(uniqBy);
        });

        let _doesContainProp: any[] = _filter(_value, (_item: any) => {
          return _item && _item.hasOwnProperty(uniqBy);
        });

        _doesContainProp = _uniqBy(_doesContainProp, uniqBy);

        _value = (<any[]>[]).concat(_notContainProp, _doesContainProp);
      }
    }

    this._value = this._value.removeIn(_key);

    this._value = this._value.setIn(_key, _value);
  }

  pushNextKey(key: string, value: any, uniqBy?: any): void {
    this.pushKey(key, value, uniqBy);
    this._next();
  }

  nextKey(key: string, value: any): void {
    this._value = this._value.setIn(this._immutableKey(key), this._immutableValue(value));
    this._next();
  }

  setObservable(
    key: string,
    observable: Observable<any>,
    options?: IZipSubjectObservableOptions
  ): void {
    if (options && options.take) {
      this._keySubscribers[key] = observable.pipe(take(options.take)).subscribe((r: any) => {
        this.nextKey(key, r);
      });
    } else {
      this._keySubscribers[key] = observable.subscribe((r: any) => {
        this.nextKey(key, r);
      });
    }
  }

  merge(value: any, publish = true): void {
    this._value = this._value.merge(this._immutableValue(value));

    if (publish) {
      this.publish();
    }
  }

  publish(): void {
    this._next();
  }

  publishRawStore(): void {
    const _value: any = this._value.toJS();
    super.next(_value);
  }

  private _immutableKey(key: string | string[]): string[] {
    return keySplitterIntoImmutablePath(key);
  }

  private _immutableValue(val: any): any {
    if (!isScalar(val)) {
      return fromJS(val);
    } else {
      return val;
    }
  }

  private _next(): void {
    const _value: any = this._value.toJS();
    if (this._config.allPropsAreDefined) {
      if (allValuesDefined(_value)) {
        super.next(_value);
        if (this._config.reset) {
          this.reset();
        }
      }
    } else if (this._config.allPropsHaveValue) {
      if (allValuesHasValue(_value)) {
        super.next(_value);
        if (this._config.reset) {
          this.reset();
        }
      }
    } else {
      super.next(_value);
      if (this._config.reset) {
        this.reset();
      }
    }
  }
}
