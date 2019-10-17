/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { Injectable, Optional, SkipSelf } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class SPThemeService {
  cssClass: string | null;

  constructor(private overlayContainer: OverlayContainer) {
    /* noop */
  }

  addOverlayThemeClass(_cssClass: string) {
    this.cssClass = _cssClass;
    this.overlayContainer.getContainerElement().classList.add(_cssClass);
  }

  removeOverlayThemeClass(_cssClass: string | null) {
    if (this.cssClass) {
      this.overlayContainer.getContainerElement().classList.remove(<string>_cssClass);
      this.cssClass = null;
    }
  }

  matDialogRef(_ref: MatDialogRef<any>) {
    _ref.beforeClose().subscribe(() => {
      this.removeOverlayThemeClass(this.cssClass);
    });
  }
}

export function _themeProviderFactory(parentDispatcher: SPThemeService, _overlayContainer: OverlayContainer) {
  // if SampleModelService is not found, create a new one
  return parentDispatcher || new SPThemeService(_overlayContainer);
}

// tslint:disable-next-line:variable-name allow-pascal-case
export const SP_THEME_PROVIDER = {
  provide: SPThemeService,
  useFactory: _themeProviderFactory,
  deps: [[new Optional(), new SkipSelf(), SPThemeService], OverlayContainer],
};
