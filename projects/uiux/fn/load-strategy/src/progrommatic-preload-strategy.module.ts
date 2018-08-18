/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROGRAMMATIC_PRELOAD_STRATEGY_PROVIDER } from './programmatic-preload-strategy.provider';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [PROGRAMMATIC_PRELOAD_STRATEGY_PROVIDER],
})
export class ProgrammicPreloadStrategyModule {}
