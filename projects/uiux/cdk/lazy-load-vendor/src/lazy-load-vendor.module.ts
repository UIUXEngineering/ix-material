/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LAZY_LOAD_VENDOR_PROVIDER } from './lazy-load-vendor.service';
import { GoogleMapsService } from './vendor.google-maps.service';
import { SPWindowRefModule } from '@uiux/cdk/dom';

@NgModule({
  imports: [CommonModule, SPWindowRefModule],
  declarations: [],
  providers: [LAZY_LOAD_VENDOR_PROVIDER, GoogleMapsService],
})
export class IxLazyLoadVendorModule {}
