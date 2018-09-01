/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LAZY_LOAD_VENDOR_PROVIDER } from './lazy-load-vendor.service';
import { GoogleMapsService } from './vendor.google-maps.service';
import { IxWindowRefModule } from '@uiux/services/dom';

@NgModule({
  imports: [CommonModule, IxWindowRefModule],
  declarations: [],
  providers: [LAZY_LOAD_VENDOR_PROVIDER, GoogleMapsService],
})
export class IxLazyLoadVendorModule {}
