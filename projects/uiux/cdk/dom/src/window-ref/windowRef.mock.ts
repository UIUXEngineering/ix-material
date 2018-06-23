/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { SPWindowRefService } from './windowRef.service';

export class MockSpWindow {
  private _matchMedia = false;

  windowProps: any = {
    build: '',
    ga: () => {},
    matchMedia: () => {
      return {
        matches: this._matchMedia,
      };
    },
    // tslint:disable-next-line
    open: () => {
      return {
        location: {
          reload: () => {},
        },
      };
    },
    location: {
      href: 'www.test.com#testTag?param1=1&param2=2',
    },

    resize: () => {
      /* noop */
    },
  };

  get nativeWindow() {
    const that = this;
    return that.windowProps;
  }

  setMatchMedia(_val) {
    this._matchMedia = _val;
  }
}

function createSpWindowServiceMock() {
  const mockInstance = new MockSpWindow();
  const provider = {
    // tslint:disable-next-line
    provide: SPWindowRefService,
    useValue: mockInstance,
  };

  return {
    mock: mockInstance,
    provider: provider,
  };
}

export { createSpWindowServiceMock };
