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
import { MENU_MODEL_PROVIDER } from './_model/menu-model.service';
import {IxMenuContent} from './menu-content';
import {IxMenu} from './menu-directive';
import {IxMenuItem} from './menu-item';
import {
  IxMenuTrigger,
  MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER,
} from './menu-trigger';


@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    MatRippleModule,
    OverlayModule,
  ],
  exports: [IxMenu, IxMenuItem, IxMenuTrigger, IxMenuContent, MatCommonModule],
  declarations: [IxMenu, IxMenuItem, IxMenuTrigger, IxMenuContent],
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, MENU_MODEL_PROVIDER]
})
export class IxMenuModule {}
