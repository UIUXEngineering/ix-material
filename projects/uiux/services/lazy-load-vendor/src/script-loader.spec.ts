/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  $Script,
  IVendorFile,
  lazyloadVendorScriptFactory,
  LOAD_EVENT_KEYS,
} from './script-loader';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { IPollForValueConfig } from '@uiux/rxjs/pipes';

describe('$script', () => {
  let _window: any;
  let _doc: any;

  beforeEach(() => {
    _window = {
      nativeWindow: {},
    };

    class DocMock {
      testEl: any = {};
      testBody: any = {
        appendChild: () => {
          /* noop */
        },
      };

      getElementsByTagName(): any[] {
        return [this.testBody];
      }

      createElement(): any {
        return this.testEl;
      }
    }

    _doc = new DocMock();
  });

  afterEach(() => {
    _window = null;
    _doc = null;
  });

  it('should create using factory without pollForValueWithConfig function', () => {
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const _script: $Script = lazyloadVendorScriptFactory(_doc, _window, config);
    expect(_script).toBeDefined();
  });

  it('should create using class', () => {
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    spyOn(_doc, 'getElementsByTagName').and.callThrough();

    const _script = new $Script(() => {}, _doc, _window, config);

    expect(_script.body).toBeDefined();
    expect(_doc.getElementsByTagName).toHaveBeenCalled();
  });

  it('should load', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    spyOn(_doc, 'createElement').and.callThrough();
    spyOn(_doc.testBody, 'appendChild').and.callThrough();

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);
    _script.load();

    // Assert
    expect(_doc.createElement).toHaveBeenCalled();
    expect(_doc.testEl.async).toBeTruthy();
    expect(_doc.testEl.type).toBe('text/javascript');
    expect(_doc.testEl.src).toBe(config.path);
    expect(_doc.testBody.appendChild).toHaveBeenCalled();
  });

  it('should load with callback created', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
      callback: 'customCallback', // <-- testing for this for this
    };

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);
    _script.load();

    // Assert
    expect(_window.nativeWindow['customCallback']).toBeDefined();
  });

  it('should create callback function', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
      callback: 'vendorCallback',
    };

    // pretend vendor is loaded by assigning itself to the window
    _window.nativeWindow[config.global] = 'resultOfCallback';

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);

    // subscribe to subject called when callback is created or vendor is loaded
    let _callbackResult: any;
    _script.subject.subscribe((_result) => {
      _callbackResult = _result;
    });

    _script._createCallback('vendorCallback');

    // Assert callback is defined
    expect(_window.nativeWindow['vendorCallback']).toBeDefined();

    // call callback
    _window.nativeWindow['vendorCallback']();

    // Assert callback is calls next on subject
    expect(_callbackResult[config.global]).toEqual('resultOfCallback');
  });

  it('should create callback function onload', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
      callback: 'vendorCallback',
    };

    // Assert
    expect(_window.nativeWindow['vendorCallback']).not.toBeDefined();

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);
    _script._createCallback('vendorCallback');

    // Assert
    expect(_window.nativeWindow['vendorCallback']).toBeDefined();
  });

  it('should not load if readystate and loaded flag not set', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: '',
    };

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);
    _script._onLoad(el);

    expect(_script.loaded).toBeFalsy();
  });

  it('should not load if loaded flag true', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: 'loaded',
    };

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);
    _script._onLoad(el);

    expect(_script.loaded).toBeFalsy();
  });

  it('should not load if readystate is loaded', () => {
    // Build
    const config: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: 'foo', // <-- testing this
    };

    // Action
    const _script = new $Script(() => {}, _doc, _window, config);

    // Not testing loaded flag, keep false
    _script.loaded = false;
    _script._onLoad(el);
    el.onload();

    // Testing readystate matches regex with 'loaded',
    // So loading code should not run and
    // loaded flag is not toggled to true.
    expect(_script.loaded).toBeFalsy();
  });

  it('loader should respond with loaded observable', () => {
    // Build
    const vendorConfig: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: '',
    };

    let pollConfig: any;

    // lettable architecture -- pass observable through without timing
    const pollFunc = function mockPollforValueWithConfig(config: IPollForValueConfig) {
      pollConfig = config;
      const errorMsg: string = config.errorMsg ? config.errorMsg : 'Poll Timeout';
      return <T>(source: Observable<T>) => {
        return new Observable((observer: Observer<T>) => {
          return source.subscribe({
            next(x: any): void {
              observer.next(x);
            },
            error(err: any): void {
              if (!err) {
                err = errorMsg;
              }
              observer.error(err);
            },
            complete(): void {
              observer.complete();
            },
          });
        });
      };
    };

    // Action
    const _script = new $Script(pollFunc, _doc, _window, vendorConfig);

    let loadedConfig: any = {};
    _script._onLoad(el);
    _script.subject.subscribe((result) => {
      loadedConfig = result;
    });

    // Add onload event handler to element
    expect(el.onload).toBeDefined();
    expect(_script.loaded).toBeFalsy();

    // call dom event handler
    el.onload();
    expect(_script.loaded).toBeTruthy();
    expect(loadedConfig[vendorConfig.global]).toBeDefined();
  });

  it('loader should respond with error', () => {
    // Build
    const vendorConfig: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: '',
    };

    let pollConfig: any;

    // lettable architecture -- pass observable through without timing
    const pollFunc = function mockPollforValueWithConfig(config: IPollForValueConfig) {
      pollConfig = config;
      const errorMsg: string = config.errorMsg ? config.errorMsg : 'Poll Timeout';
      return <T>(source: Observable<T>) => {
        return new Observable((observer: Observer<T>) => {
          source.subscribe();
          observer.error(new Error(errorMsg));
        });
      };
    };

    // Action
    const _script = new $Script(pollFunc, _doc, _window, vendorConfig);

    _script._onLoad(el);

    let error: any;
    _script.subject.subscribe(
      () => {
        /* noop */
      },
      (_error) => {
        error = _error;
      }
    );

    // Add onload event handler to element
    expect(el.onload).toBeDefined();
    expect(_script.loaded).toBeFalsy();

    // call dom event handler
    el.onload();
    expect(error).toEqual('vendor1 not loaded.');
  });

  it('should create pollconfig with hard coded values', () => {
    // Build
    const vendorConfig: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: '',
    };

    let pollConfig: any;

    // lettable architecture -- pass observable through without timing
    const pollFunc = function mockPollforValueWithConfig(config: IPollForValueConfig) {
      pollConfig = config;
      const errorMsg: string = config.errorMsg ? config.errorMsg : 'Poll Timeout';
      return <T>(source: Observable<T>) => {
        return new Observable((observer: Observer<T>) => {
          return source.subscribe({
            next(x: any): void {
              observer.next(x);
            },
            error(err: any): void {
              err = err ? err : errorMsg;
              observer.error(err);
            },
            complete(): void {
              observer.complete();
            },
          });
        });
      };
    };

    // Action
    const _script = new $Script(pollFunc, _doc, _window, vendorConfig);

    _script._onLoad(el);

    // call dom event handler
    el.onload();
    expect(pollConfig.delay).toEqual(250);
    expect(pollConfig.interval).toEqual(250);
    expect(pollConfig.timeout).toEqual(5000);
    expect(pollConfig.sourceObservable).toBeDefined();

    // Actual results tested in other tests
    expect(pollConfig.compare()).toBeDefined();
    expect(pollConfig.sourceObservable()).toBeDefined();
  });

  it('should not reload using event handler', () => {
    // Build
    const vendorConfig: IVendorFile = {
      global: 'vendor1',
      path: 'path/to/vendor/file.js',
    };

    const el: any = {
      [LOAD_EVENT_KEYS.ON_READY_STATE_CHANGE]: null,
      [LOAD_EVENT_KEYS.READY_STATE]: '',
    };

    let pollConfig: any;

    // lettable architecture -- pass observable through without timing
    const pollFunc = function mockPollforValueWithConfig(config: IPollForValueConfig) {
      pollConfig = config;
      const errorMsg: string = config.errorMsg ? config.errorMsg : 'Poll Timeout';
      return <T>(source: Observable<T>) => {
        return new Observable((observer: Observer<T>) => {
          return source.subscribe({
            next(x: any): void {
              observer.next(x);
            },
            error(err: any): void {
              err = err ? err : errorMsg;
              observer.error(err);
            },
            complete(): void {
              observer.complete();
            },
          });
        });
      };
    };

    // Action
    const _script = new $Script(pollFunc, _doc, _window, vendorConfig);

    _script._onLoad(el);

    // call dom event handler
    el.onload();
    expect(pollConfig.delay).toEqual(250);

    // Nuke it for testing, call el.onload again.
    pollConfig = null;
    el.onload();
    expect(pollConfig).toBeNull();
  });
});
