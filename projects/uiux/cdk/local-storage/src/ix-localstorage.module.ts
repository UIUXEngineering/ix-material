/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPWindowRefModule } from '@uiux/cdk/dom';
import { IxLocalStorageService } from './ix-localstorage.service';

@NgModule({
  imports: [CommonModule, SPWindowRefModule],
  exports: [],
  providers: [IxLocalStorageService],
})
export class IxLocalstorageModule {}
