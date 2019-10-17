import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Device, DeviceState } from './device.interfaces';
import { DEVICE_FEATURE_KEY } from './device.reducer';
import { calcTopTap } from './helpers/calc-top-tap';

// Lookup the 'Device' feature state managed by NgRx
export const getDeviceState = createFeatureSelector<DeviceState>(DEVICE_FEATURE_KEY);

export const getDevice = createSelector(
  getDeviceState,
  (state: DeviceState): Device => state.device
);

export const getCordova = createSelector(
  getDeviceState,
  (state: DeviceState) => state.cordova
);

export const isCordova = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isCordova
);

export const notCordova = createSelector(
  getDeviceState,
  (state: DeviceState) => !state.isCordova
);

export const isPortrait = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isPortrait
);

export const isCordovaPortrait = createSelector(
  isCordova,
  isPortrait,
  (_isCordova: boolean, _isPortrait: boolean) => _isCordova && _isPortrait
);

export const isLandscape = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isLandscape
);

export const isDesktop = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isElectron
);

export const isBrowser = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isBrowser
);

export const isBrowserOrElectron = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isBrowser || state.isElectron
);

export const isCordovaOrElectron = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isCordova || state.isElectron
);

export const isSmallScreen = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isSmallScreen
);

export const isIphoneNotch = createSelector(
  getDeviceState,
  (state: DeviceState) => state.isIphoneNotch
);

export const isIphoneNotchSmall = createSelector(
  isIphoneNotch,
  isSmallScreen,
  (notch: boolean, smallScreen: boolean) => notch && smallScreen
);

export const isIphoneNotchLarge = createSelector(
  isIphoneNotch,
  isSmallScreen,
  (notch: boolean, smallScreen: boolean) => notch && !smallScreen
);

export const isIphoneNotchPortrait = createSelector(
  isIphoneNotch,
  isPortrait,
  (notch: boolean, portrait: boolean) => notch && portrait
);

export const isIphoneNotchLandscape = createSelector(
  isIphoneNotch,
  isLandscape,
  (notch: boolean, landscape: boolean) => notch && landscape
);

export const isSmallToolbar = createSelector(
  isIphoneNotch,
  isSmallScreen,
  (notch, smallScreen) => !notch && smallScreen
);

export const isLargeToolbar = createSelector(
  isIphoneNotch,
  isSmallScreen,
  (notch, smallScreen) => !notch && !smallScreen
);

export const fixedTopGap = createSelector(
  isSmallScreen,
  isIphoneNotch,
  isPortrait,
  isDesktop,
  calcTopTap
);
