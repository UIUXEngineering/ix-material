import { animate, style, transition, trigger } from '@angular/animations';

export const ANIMATE_CONST: any = {
  SPLASH_SCREEN_FADE_DELAY: 0,
};

export const ANIMATE_CONFIG: any = {
  transitionActive: transition('inactive => active', animate('200ms ease-in')),
  transitionInactive: transition('active => inactive', animate('200ms ease-out')),
};
