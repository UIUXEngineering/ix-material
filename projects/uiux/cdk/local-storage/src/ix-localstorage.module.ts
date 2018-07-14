/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IxLocalStorageService } from './ix-localstorage.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [IxLocalStorageService],
})
export class IxLocalstorageModule {}
