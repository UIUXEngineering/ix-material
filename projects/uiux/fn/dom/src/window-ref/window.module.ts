/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';

import { IxWindowRefService } from './windowRef.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [IxWindowRefService],
})
export class IxWindowRefModule {
  /* noop */
}
