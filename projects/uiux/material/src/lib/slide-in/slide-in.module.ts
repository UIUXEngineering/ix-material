/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { SPSlideInComponent } from './slide-in.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  declarations: [SPSlideInComponent],
  exports: [SPSlideInComponent],
})
export class SPSlideInModule {}
