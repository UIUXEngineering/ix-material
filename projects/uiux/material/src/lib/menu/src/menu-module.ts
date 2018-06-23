/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {SPMenuContent} from './menu-content';
import {SPMenu} from './menu-directive';
import {SPMenuItem} from './menu-item';
import {
  SPMenuTrigger,
  MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER,
} from './menu-trigger';
import {MENU_MODEL_PROVIDER} from './_model/menu-model.service';

@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    MatRippleModule,
    OverlayModule,
  ],
  exports: [SPMenu, SPMenuItem, SPMenuTrigger, SPMenuContent, MatCommonModule],
  declarations: [SPMenu, SPMenuItem, SPMenuTrigger, SPMenuContent],
  providers: [MENU_MODEL_PROVIDER, MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
})
export class SPMenuModule {}
