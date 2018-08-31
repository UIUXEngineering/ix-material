/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpShowSingleErrorPipe } from './error-show-single';
import { SpDatePipe } from './date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SpShowSingleErrorPipe, SpDatePipe],
  exports: [SpShowSingleErrorPipe, SpDatePipe],
})
export class SpPipesModule {}
