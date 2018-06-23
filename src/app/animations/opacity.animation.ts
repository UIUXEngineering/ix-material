import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

export const ANIMATE_OPACITY: any = trigger('opacity', [
  state(
    'inactive',
    style({
      opacity: 0,
    })
  ),
  state(
    'active',
    style({
      opacity: 1,
    })
  ),
  transition('inactive <=> active', animate('100ms ease-out')),
]);
