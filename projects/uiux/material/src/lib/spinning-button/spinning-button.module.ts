/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { SpSpinningButtonComponent } from './spinning-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [SpSpinningButtonComponent],
  exports: [SpSpinningButtonComponent],
})
export class SpSpinningButtonModule {}
