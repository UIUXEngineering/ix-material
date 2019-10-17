/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MENU_MODEL_PROVIDER } from './_model/menu-model.service';
import { IxMenuContent } from './menu-content';
import { _IxMenu } from './menu';
import { IxMenuItem } from './menu-item';
import { IxMenuTrigger, MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER } from './menu-trigger';

/**
 * Used by both the current `IxMenuModule` and the MDC `IxMenuModule`
 * to declare the menu-related directives.
 */
@NgModule({
  exports: [IxMenuTrigger, IxMenuContent, MatCommonModule],
  declarations: [IxMenuTrigger, IxMenuContent],
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
// tslint:disable-next-line:class-name
export class _IxMenuDirectivesModule {}

@NgModule({
  imports: [CommonModule, MatCommonModule, MatRippleModule, OverlayModule, _IxMenuDirectivesModule],
  exports: [_IxMenu, IxMenuItem, _IxMenuDirectivesModule],
  declarations: [_IxMenu, IxMenuItem],
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, MENU_MODEL_PROVIDER],
})
export class IxMenuModule {}
