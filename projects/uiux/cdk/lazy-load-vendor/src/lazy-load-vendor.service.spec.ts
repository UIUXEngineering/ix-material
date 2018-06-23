import { IVendorFile } from './script-loader';
import { _lazyLoadVendorFactory, LazyLoadVendorService } from './lazy-load-vendor.service';
import { BehaviorSubject } from 'rxjs';
import { createSpWindowServiceMock } from '@uiux/cdk/dom';

describe('LazyLoadVendorService', () => {
  let lazyloadService: LazyLoadVendorService;
  let mockScript: any;
  let test: any;
  let scriptFactory: any;

  beforeEach(() => {
    test = {};
    test.window = createSpWindowServiceMock();

    class MockScript {
      subject: BehaviorSubject<any>;

      constructor(_doc: any, _window: any, public config: IVendorFile) {
        this.subject = new BehaviorSubject({
          [config.global]: null,
        });
      }

      load(): void {
        this.subject.next({
          [this.config.global]: 'loaded',
        });
      }
    }

    scriptFactory = function(_doc: any, _window: any, _config: any): any {
      mockScript = new MockScript(_doc, _window, _config);
      spyOn(mockScript, 'load').and.callThrough();
      return mockScript;
    };

    lazyloadService = new LazyLoadVendorService(scriptFactory, scriptFactory);
  });

  afterEach(() => {
    mockScript = null;
    test = null;
    scriptFactory = null;
  });

  it('should load config', function() {
    expect(lazyloadService.globals['mockVendor']).not.toBeDefined();

    const config: IVendorFile = {
      global: 'mockVendor',
      path: 'path/to/mockVendor/file.js',
    };

    lazyloadService.load(config);

    expect(mockScript.load).toHaveBeenCalled();
    expect(lazyloadService.globals['mockVendor']).toBeDefined();
    expect(lazyloadService.globals['mockVendor'].subject).toBeDefined();
    expect(lazyloadService.globals['mockVendor'].subject.subscribe).toBeDefined();
  });

  it('should load config one time', function() {
    expect(lazyloadService.globals['mockVendor']).not.toBeDefined();

    const config: IVendorFile = {
      global: 'mockVendor',
      path: 'path/to/mockVendor/file.js',
    };

    // simulate many different angular services or components requesting load.
    lazyloadService.load(config);
    lazyloadService.load(config);
    lazyloadService.load(config);

    expect(mockScript.load).toHaveBeenCalledTimes(1);
  });

  it('should load array of configs', () => {
    const configs: IVendorFile[] = [
      {
        global: 'mockVendor',
        path: 'path/to/mockVendor/file.js',
      },
      {
        global: 'mockVendor2',
        path: 'path/to/mockVendor/file2.js',
      },
    ];

    spyOn(lazyloadService, '_loadObservable');
    lazyloadService.loadAll(configs);

    expect(lazyloadService._loadObservable).toHaveBeenCalled();
  });

  it('should return observable', () => {
    const configs: IVendorFile[] = [
      {
        global: 'mockVendor',
        path: 'path/to/mockVendor/file.js',
      },
      {
        global: 'mockVendor2',
        path: 'path/to/mockVendor/file2.js',
      },
    ];

    /**
     * No rxjs timing functions ( timer, interval, etc ), so can use
     * the method without marbles.
     */
    lazyloadService
      ._loadObservable(configs, ['mockVendor', 'mockVendor2'])
      .subscribe((result: any) => {
        expect(result['mockVendor']).toEqual('loaded');
        expect(result['mockVendor2']).toEqual('loaded');
      });
  });

  it('should create config using helper function', () => {
    const config: IVendorFile = lazyloadService.createConfig(
      'someGlobal',
      'path/to/file.js',
      'someCallback'
    );

    expect(config.global).toEqual('someGlobal');
    expect(config.path).toEqual('path/to/file.js');
    expect(config.callback).toEqual('someCallback');
  });

  it('should create service from factory', () => {
    const service = _lazyLoadVendorFactory(null, {});
    expect(service).toBeDefined();
  });

  it('should not create service if created in parent module', () => {
    const service = _lazyLoadVendorFactory(lazyloadService, {});
    expect(service).toBeDefined();
  });
});
