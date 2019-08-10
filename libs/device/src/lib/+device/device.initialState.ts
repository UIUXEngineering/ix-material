import { DeviceState } from './device.interfaces';

export const deviceInitialState: DeviceState = {
  isLoaded: false,
  isActive: true,
  isIphoneNotch: false,
  isCordova: null,
  isElectron: null,
  isBrowser: null,
  isLandscape: false,
  isPortrait: true,
  isSmallScreen: false,
  cordova: {
    version: '',
    platformVersion: '',
    platformId: 'browser',
    callbackId: 0,
    callbacks: {
      NetworkStatus848829231: {},
      StatusBar848829232: {
        fail: null
      }
    },
    callbackStatus: {
      NO_RESULT: 0,
      OK: 1,
      CLASS_NOT_FOUND_EXCEPTION: 2,
      ILLEGAL_ACCESS_EXCEPTION: 3,
      INSTANTIATION_EXCEPTION: 4,
      MALFORMED_URL_EXCEPTION: 5,
      IO_EXCEPTION: 6,
      INVALID_ACTION: 7,
      JSON_EXCEPTION: 8,
      ERROR: 9
    },
    file: {
      applicationDirectory: '',
      applicationStorageDirectory: '',
      dataDirectory: '',
      cacheDirectory: '',
      externalApplicationStorageDirectory: null,
      externalDataDirectory: null,
      externalCacheDirectory: null,
      externalRootDirectory: null,
      tempDirectory: '',
      syncedDataDirectory: '',
      documentsDirectory: '',
      sharedDirectory: null
    },
    InAppBrowser: {}
  },
  device: {
    available: false,
    platform: '',
    version: '',
    uuid: '',
    cordova: '',
    model: '',
    manufacturer: '',
    isVirtual: false,
    serial: ''
  },
  currentDevice: {
    isCordova: false,
    isDesktop: false,
    isBrowser: false,
    cordovaDeviceData: null,
    browserData: null,
    cordovaElectronData: null
  }
};
