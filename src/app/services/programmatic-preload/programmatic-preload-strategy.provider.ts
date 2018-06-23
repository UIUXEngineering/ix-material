/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Optional, SkipSelf } from '@angular/core';
import { ProgrammaticPreloadingStrategy } from './progrommatic-preloading-strategy';

export function _progrommaticPreloadStrategyFactory(
  parentDispatcher: ProgrammaticPreloadingStrategy
): ProgrammaticPreloadingStrategy {
  return parentDispatcher || new ProgrammaticPreloadingStrategy();
}

export const PROGRAMMATIC_PRELOAD_STRATEGY_PROVIDER: any[] = [
  {
    provide: ProgrammaticPreloadingStrategy,
    useFactory: _progrommaticPreloadStrategyFactory,
    deps: [[new Optional(), new SkipSelf(), ProgrammaticPreloadingStrategy]],
  },
];
