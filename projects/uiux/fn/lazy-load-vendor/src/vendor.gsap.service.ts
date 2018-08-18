/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import { IVendorFile } from './script-loader';
import { Observable } from 'rxjs/Observable';
import { LazyLoadVendorService } from './lazy-load-vendor.service';

export interface IGsap {
  CSSPlugin: any;
  Draggable: any;
  ThrowPropsPlugin: any;
  TimelineMax: any;
  TweenMax: any;
}

@Injectable()
export class GsapService {
  private _basePath = 'assets/vendors/gsap/';
  configs: IVendorFile[] = [];

  constructor(private _vendor: LazyLoadVendorService) {
    this.configs.push(_vendor.createConfig('CSSPlugin', this._concatPath('CSSPlugin.min.js')));

    this.configs.push(_vendor.createConfig('Draggable', this._concatPath('Draggable.min.js')));

    this.configs.push(
      _vendor.createConfig('ThrowPropsPlugin', this._concatPath('ThrowPropsPlugin.min.js'))
    );

    this.configs.push(_vendor.createConfig('TimelineMax', this._concatPath('TimelineMax.min.js')));

    this.configs.push(_vendor.createConfig('TweenMax', this._concatPath('TweenMax.min.js')));
  }

  load(): Observable<IGsap> {
    return this._vendor.loadAll(this.configs);
  }

  private _concatPath(_filename: string): string {
    return this._basePath + _filename;
  }
}
