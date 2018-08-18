import { GoogleMapsService } from './vendor.google-maps.service';
import { IVendorFile } from './script-loader';
import { _lazyLoadVendorFactory } from './lazy-load-vendor.service';
import { createSpWindowServiceMock } from '@uiux/cdk/dom';

describe('GoogleMapsService', () => {
  let _mockVendor: any;
  let test: any;

  beforeEach(() => {
    test = {};
    test.window = createSpWindowServiceMock();

    _mockVendor = {
      loadAll: () => {
        /* noop */
      },

      // copied from lazy-load-vendor.service.ts
      // to prevent external dependenc
      createConfig: (_global: string, _path: string, _callback?: string): IVendorFile => {
        return {
          global: _global,
          path: _path,
          callback: _callback,
        };
      },
    };
  });

  afterEach(() => {
    _mockVendor = null;
  });

  it('should create config', () => {
    const realVendor = _lazyLoadVendorFactory(null, {});

    const service = new GoogleMapsService(realVendor);

    expect(service.configs[0].global).toEqual('google');
    expect(service.configs[0].callback).toEqual('ixGoogleMapsAPILazyLoader');

    // let's not check for api key
    expect(
      service.configs[0].path.indexOf('https://maps.googleapis.com/maps/api/js?key=')
    ).toBeGreaterThan(-1);
    expect(service.configs[0].path.indexOf('&libraries=places&callback=')).toBeGreaterThan(-1);
  });

  it('should call loadAll in vendor lazy loader', () => {
    spyOn(_mockVendor, 'loadAll');
    const service = new GoogleMapsService(_mockVendor);
    service.load();

    expect(_mockVendor.loadAll).toHaveBeenCalled();
  });
});
