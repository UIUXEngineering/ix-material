import { createAction, props } from '@ngrx/store';
import { DeviceState } from './device.interfaces';

export enum DeviceActionTypes {
  GetDeviceCache = '[Device] Get Device Cache',
  CreateDeviceCache = '[Device] Create Device Cache',
  CreateDeviceCacheError = '[Device] Create Device Cache Error',
  DetectDevices = '[Device] Detect Devices',
  IsPortrait = '[Device] Is Portrait',
  IsLandscape = '[Device] Is Landscape',
  LoadDevice = '[Device] Load Device',
  DeviceLoaded = '[Device] Device Loaded',
  DeviceLoadError = '[Device] Device Load Error',
}

export const getDeviceCache = createAction(
  '[Device] Get Device Cache',
  props<{payload: DeviceState}>());

export const createDeviceCache = createAction(
  '[Device] Create Device Cache',
  props<{payload: DeviceState}>());

export const createDeviceCacheError = createAction(
  '[Device] Create Device Cache Error',
  props<{payload: DeviceState}>()
);

export const isPortrait = createAction(
  '[Device] Is Portrait',
  props<{payload: DeviceState}>()
);

export const isLandscape = createAction(
  '[Device] Is Landscape',
  props<{payload: DeviceState}>()
);

export const loadDevice = createAction(
  '[Device] Load Device',
   props<{payload: DeviceState}>(),
);

export const deviceLoadError = createAction(
  '[Device] Device Load Error',
  props<{payload: DeviceState}>(),
);

export const deviceLoaded = createAction(
  '[Device] Device Loaded',
  props<{payload: DeviceState}>()
);


