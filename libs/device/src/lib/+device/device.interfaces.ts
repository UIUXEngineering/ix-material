import { Cordova } from '../cordova-filesystem/cordova.interfaces';

export interface Device {
  available: boolean;
  platform: string;
  version: string;
  uuid: string;
  cordova: string; // version
  model: string;
  manufacturer: string;
  isVirtual: boolean;
  serial: string;
}

export interface SpoutCordova extends Cordova {
  version: string;
  platformVersion: string;
  platformId: string;
  callbackId: number;
  callbacks: {
    NetworkStatus848829231: any;
    StatusBar848829232: {
      fail: null;
    };
  };
  callbackStatus: {
    NO_RESULT: number;
    OK: number;
    CLASS_NOT_FOUND_EXCEPTION: number;
    ILLEGAL_ACCESS_EXCEPTION: number;
    INSTANTIATION_EXCEPTION: number;
    MALFORMED_URL_EXCEPTION: number;
    IO_EXCEPTION: number;
    INVALID_ACTION: number;
    JSON_EXCEPTION: number;
    ERROR: number;
  };
  file: {
    applicationDirectory: string;
    applicationStorageDirectory: string;
    dataDirectory: string;
    cacheDirectory: string;
    externalApplicationStorageDirectory: null;
    externalDataDirectory: null;
    externalCacheDirectory: null;
    externalRootDirectory: null;
    tempDirectory: string;
    syncedDataDirectory: string;
    documentsDirectory: string;
    sharedDirectory: null;
  };
  InAppBrowser: any;
}

export interface CurrentDevice {
  isCordova?: boolean;
  isDesktop?: boolean;
  isBrowser?: boolean;
  cordovaDeviceData?: Device;
  browserData?: any;
  cordovaElectronData?: any;
}

export interface DeviceState {
  isLoaded: boolean;
  isActive: boolean;
  isIphoneNotch: boolean;
  isCordova: boolean;
  isElectron: boolean;
  isBrowser: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  isSmallScreen: boolean;
  cordova: SpoutCordova;
  device: Device;
  currentDevice: CurrentDevice;
  cacheDirectoryError?: boolean;
  cacheDirectoryResponse?: any;
}
