// import { DeviceLoaded } from './device.actions';
// import {
//   deviceReducer
// } from './device.reducer';
//
// describe('Device Reducer', () => {
//   const getDeviceId = it => it['id'];
//   let createDevice;
//
//   beforeEach(() => {
//     createDevice = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });
//
//   describe('valid Device actions ', () => {
//     it('should return set the list of known Device', () => {
//       const devices = [
//         createDevice('PRODUCT-AAA'),
//         createDevice('PRODUCT-zzz')
//       ];
//       const action = new DeviceLoaded(devices);
//       const result: DeviceState = deviceReducer(initialState, action);
//       const selId: string = getDeviceId(result.list[1]);
//
//       expect(result.loaded).toBe(true);
//       expect(result.list.length).toBe(2);
//       expect(selId).toBe('PRODUCT-zzz');
//     });
//   });
//
//   describe('unknown action', () => {
//     it('should return the initial state', () => {
//       const action = {} as any;
//       const result = deviceReducer(initialState, action);
//
//       expect(result).toBe(initialState);
//     });
//   });
// });
