/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPWindowRefModule } from '@uiux/cdk/dom';
import { SP_LOCALSTORAGE_PROVIDER } from './localStorage';

@NgModule({
  imports: [CommonModule, SPWindowRefModule],
  exports: [],
  providers: [SP_LOCALSTORAGE_PROVIDER],
})
export class LocalstorageModule {}
