/* tslint:disable */
import { Injectable } from '@angular/core';
import { ANIMATE_CONST } from './animateConfig';

/* tslint:disable */
let TimelineMax: any;
let TweenMax: any;
/* tslint:enable */

@Injectable()
export class AppAnimationService {
  // timeline
  private _tl: any;
  private _callFadeout = false;

  constructor() {
    /* tslint:disable */
    if (!TweenMax || !TimelineMax) {
      TweenMax = window['TweenMax'];
      TimelineMax = window['TimelineMax'];
    }
    /* tslint:enable */
  }

  initialize(): void {
    /* noop */
  }

  fadeOut(): void {
    const container: Element = document.getElementById('SPLASH-CONTAINER');

    if (!container) {
      return;
    }

    if (!this._callFadeout) {
      this._tl = new TimelineMax({ onComplete: this.removeSplashElements });

      this._tl.add(
        TweenMax.to('#SPLASH-CONTAINER', 0.5, {
          delay: ANIMATE_CONST.SPLASH_SCREEN_FADE_DELAY,
          opacity: 0,
        })
      );
    }
  }

  removeSplashElements(): void {
    /* tslint:disable */
    window.removeEventListener('onresize', window['centerSplashLogo']);
    /* tslint:enable */
    const svg: Element = document.getElementById('SPLASH-CONTAINER');
    if (svg) {
      document.body.removeChild(svg);
    }
  }
}
