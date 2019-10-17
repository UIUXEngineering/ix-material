import { Action, createReducer, on } from '@ngrx/store';
import * as DeviceActions from './device.actions';
import { deviceInitialState } from './device.initialState';
import { DeviceState } from './device.interfaces';

export const DEVICE_FEATURE_KEY = 'device';

/**
 * Interface for the 'Device' data used in
 *  - DeviceState, and
 *  - deviceReducer
 *
 *  Note: replace if already defined in another module
 */

export interface DevicePartialState {
  readonly [DEVICE_FEATURE_KEY]: DeviceState;
}

const deviceReducer = createReducer(
  deviceInitialState,

  on(DeviceActions.deviceLoaded, (state, { payload }) => Object.assign({}, state, payload)),

  on(DeviceActions.isPortrait, (state, { payload }) => {
    const update = <DeviceState>{
      isPortrait: true,
      isLandscape: false,
      isSmallScreen: payload.isSmallScreen,
    };

    return Object.assign({}, state, update);
  }),

  on(DeviceActions.isLandscape, (state, { payload }) => {
    const update = <DeviceState>{
      isPortrait: false,
      isLandscape: true,
      isSmallScreen: payload.isSmallScreen,
    };

    return Object.assign({}, state, update);
  })
);

export function reducer(state: DeviceState | undefined, action: Action) {
  return deviceReducer(state, action);
}
