/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { clone } from '@uiux/cdk/object';
import { clonePipe } from '@uiux/cdk/rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';

/**
 * Wrapper for local-storage.
 *
 * Reading and writing to local-storage is slow, and if
 * developers use as a memory cache, race conditions
 * occur with larger storage values.
 *
 * This service eliminates race conditions but keeps
 * persistence.
 */
@Injectable()
export class SPLocalStorageService {
  private _localStorageAvaliable = true;
  private _ls: Storage; // local-storage
  private _removeOnWindowUnload: string[] = [];
  private _onstorageKeyCache: { [key: string]: BehaviorSubject<any> } = {};

  storage: BehaviorSubject<any> = new BehaviorSubject<any>({});

  onstorage: Observable<any> = this.storage.pipe(clonePipe());

  get value(): any {
    return this.onstorage;
  }

  constructor() {
    if (this.localStorageAvailable()) {
      this._ls = (<any>window).localStorage;
      this.loadLocalStorageToMemory();
    } else {
      this._localStorageAvaliable = false;
    }

    fromEvent(window, 'onbeforeunload').subscribe(() => {
      this._removeOnWindowUnload.forEach((key: string) => {
        this.removeItem(key);
      });
    });

    fromEvent(window, 'onstorage').subscribe((e: StorageEvent) => {
      if (e.key) {
        this._next(e.key, e.newValue);

        if (this._onstorageKeyCache[e.key]) {
          this._onstorageKeyCache[e.key].next(e.newValue || null);
        }
      } else {
        this.loadLocalStorageToMemory();
      }
    });

    // (<any>window).onstorage = (e) => {
    //   // console.log('The ' + e.key + ' key has been changed from ' +
    //   //   e.oldValue + ' to ' + e.newValue + '.');
    //   if (e.key) {
    //     this._next(e.key, e.newValue);
    //
    //     if (this._onstorageKeyCache[e.key]) {
    //       this._onstorageKeyCache[e.key].next(e.newValue || null);
    //     }
    //   } else {
    //     this.loadLocalStorageToMemory();
    //   }
    // };
  }

  storageAvailable(type: string): boolean {
    const storage = (<any>window)[type];
    try {
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }

  localStorageAvailable(): boolean {
    return this.storageAvailable('localStorage');
  }

  sessionStorageAvailable(): boolean {
    return this.storageAvailable('sessionStorage');
  }

  loadLocalStorageToMemory(): void {
    if (this._ls) {
      const _cache: any = {};

      let i = 0;
      const len: number = this._ls.length;
      for (i; i < len; i++) {
        const key: string | null = this._ls.key(i);
        if (key) {
          const data: string | null = this._ls.getItem(key);
          if (data) {
            _cache[key] = data;
          }
        }
      }

      Object.keys(_cache).forEach((key: string) => {
        if (this._onstorageKeyCache[key] && this._onstorageKeyCache[key] !== _cache[key]) {
          this._onstorageKeyCache[key].next(_cache[key]);
        }
      });

      Object.keys(this._onstorageKeyCache).forEach((key: string) => {
        if (!_cache[key]) {
          this._onstorageKeyCache[key].next(null);
        }
      });

      this.storage.next(_cache);
    }
  }

  setItem(key: string, value: any): void {
    this._next(key, value);
    if (this._ls) {
      this._ls.setItem(key, value);
    }
  }

  getItem(key: string): any {
    const item = this.storage.getValue()[key];
    if (item) {
      return item;
    } else {
      return null;
    }
  }

  removeItem(key: string): void {
    this._removeItemFromStorage(key);

    if (this._ls) {
      this._ls.removeItem(key);
    }
  }

  clear(): void {
    this.storage.next({});

    const keys: string[] = Object.keys(this._onstorageKeyCache);
    keys.forEach((key) => {
      this._onstorageKeyCache[key].next(null);
    });

    if (this._ls) {
      this._ls.clear();
    }
  }

  clearMemory(): void {
    this.storage.next({});
    this.loadLocalStorageToMemory();
  }

  removeOnWindowUnload(key: string): void {
    this._removeOnWindowUnload.push(key);
  }

  setItemWithPrefix(prefix: string, key: string, value: any): void {
    const newKey: string = prefix + '.' + key;
    this.setItem(newKey, value);
  }

  getItemsByPrefix(prefix: string): any {
    const foundKeys: string[] = this.getKeysByPrefix(prefix);
    const r: any = {};

    foundKeys.forEach((key: string) => {
      r[key] = this.getItem(key);
    });

    return r;
  }

  removeItemsByPrefix(prefix: string): void {
    const keys: string[] = this.getKeysByPrefix(prefix);
    keys.forEach((key) => {
      this._removeItemFromStorage(key);
    });
  }

  removeAllItemsByPrefixArray(prefixes: string[]): void {
    prefixes.forEach((prefix) => {
      this.removeItemsByPrefix(prefix);
    });
  }

  getKeysByPrefix(prefix: string): string[] {
    const _storage: any = this.getValue();
    const prefixLength: number = prefix.length;
    const foundKeys: string[] = [];
    const allKeys: string[] = Object.keys(_storage);

    allKeys.forEach((key: string) => {
      if (_storage.hasOwnProperty(key) && key.substr(0, prefixLength) === prefix) {
        foundKeys.push(key);
      }
    });

    return foundKeys;
  }

  getKeysWithSearchString(search: string): string[] {
    const _storage: any = this.getValue();
    const foundKeys: string[] = [];
    const allKeys: string[] = Object.keys(_storage);

    allKeys.forEach((key: string) => {
      if (key.indexOf(search) > -1) {
        foundKeys.push(key);
      }
    });

    return foundKeys;
  }

  removeItemsBySearchString(search: string): void {
    const keys: string[] = this.getKeysWithSearchString(search);
    keys.forEach((key) => {
      this._removeItemFromStorage(key);
    });
  }

  removeAllItemsBySearchArray(searches: string[]): void {
    searches.forEach((str: string) => {
      this.removeItemsBySearchString(str);
    });
  }

  getItemsWithPartialKey(search: string): any {
    const foundKeys: string[] = this.getKeysWithSearchString(search);
    const r: any = {};

    foundKeys.forEach((key: string) => {
      r[key] = this.getItem(key);
    });

    return r;
  }

  onstorageKey(key: string): BehaviorSubject<any> {
    if (!this._onstorageKeyCache[key]) {
      this._onstorageKeyCache[key] = new BehaviorSubject<any>(this.getValue()[key]);
    }
    return this._onstorageKeyCache[key];
  }

  getValue(): any {
    return clone(this.storage.getValue());
  }

  reset(): void {
    this.clear();
    const keys: string[] = Object.keys(this._onstorageKeyCache);
    keys.forEach((key) => {
      this._onstorageKeyCache[key].complete();
    });
    this._onstorageKeyCache = {};
  }

  private _next(key: string, value: string | undefined): void {
    const _storage: any = this.getValue();

    if (_storage[key] !== value) {
      _storage[key] = value;
      this.storage.next(_storage);
    }

    if (this._onstorageKeyCache[key]) {
      this._onstorageKeyCache[key].next(value);
    }
  }

  private _removeItemFromStorage(key): void {
    const _storage: any = this.storage.getValue();
    delete _storage[key];
    this.storage.next(_storage);

    if (this._onstorageKeyCache[key]) {
      this._onstorageKeyCache[key].next(null);
    }

    if (this._ls) {
      this._ls.removeItem(key);
    }
  }
}

export function _localstorageFactory(
  parentDispatcher: SPLocalStorageService
): SPLocalStorageService {
  return parentDispatcher || new SPLocalStorageService();
}

export const SP_LOCALSTORAGE_PROVIDER: any[] = [
  {
    provide: SPLocalStorageService,
    useFactory: _localstorageFactory,
    deps: [[new Optional(), new SkipSelf(), SPLocalStorageService]],
  },
];
