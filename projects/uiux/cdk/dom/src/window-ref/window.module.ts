/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';

import { SP_WINDOW_PROVIDER } from './windowRef.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [SP_WINDOW_PROVIDER],
})
export class SPWindowRefModule {
  /* noop */
}
