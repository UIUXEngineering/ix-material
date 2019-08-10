import * as fromDeviceActions from './lib/+device/device.actions';

export const deviceActions = fromDeviceActions;

export * from './lib/device.module';
export * from './lib/breakpoints/interface';
export * from './lib/breakpoints/breakpoints';

export * from './lib/+device/device.detection';
export * from './lib/+device/device.effects';
export * from './lib/+device/device.facade';
export * from './lib/+device/device.initialState';
export * from './lib/+device/device.interfaces';
export * from './lib/+device/device.reducer';
