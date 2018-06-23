/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import { IVendorFile } from './script-loader';
import { LazyLoadVendorService } from './lazy-load-vendor.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleMapsService {
  private _callbackName = 'ixGoogleMapsAPILazyLoader';
  private _basePath: string = 'https://maps.googleapis.com/maps/api/js?key=' +
  'apiKey' +
  '&libraries=places&callback=' +
  this._callbackName;
  configs: IVendorFile[] = [];

  constructor(private _vendor: LazyLoadVendorService) {
    // Loader configs
    this.configs.push(_vendor.createConfig('google', this._basePath, this._callbackName));
  }

  load(): Observable<any> {
    return this._vendor.loadAll(this.configs);
  }
}
