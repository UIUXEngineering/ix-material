/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { SP_THEME_PROVIDER } from './theme.service';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [OverlayModule, MatDialogModule],
  exports: [],
  declarations: [],
  providers: [SP_THEME_PROVIDER],
})
export class SPThemeModule {
  /* noop */
}
