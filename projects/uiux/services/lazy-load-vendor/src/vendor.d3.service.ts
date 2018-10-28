/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import { IVendorFile } from './script-loader';
import { Observable } from 'rxjs';
import { LazyLoadVendorService } from './lazy-load-vendor.service';

export interface ID3 {
  d3: any;
}

@Injectable()
export class D3Service {
  private _basePath = 'assets/vendors/d3/';
  configs: IVendorFile[] = [];

  constructor(private _vendor: LazyLoadVendorService) {
    // Loader configs
    this.configs.push(_vendor.createConfig('d3', this._concatPath('d3.min.js')));

    this.configs.push(
      _vendor.createConfig('d3.polygonHull', this._concatPath('d3-polygon.min.js'))
    );
  }

  load(): Observable<ID3> {
    return this._vendor.loadAll(this.configs);
  }

  private _concatPath(_filename: string): string {
    return this._basePath + _filename;
  }
}
