// import { Entity, DeviceState } from './device.reducer';
// import { deviceQuery } from './device.selectors';
//
// describe('Device Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getDeviceId = it => it['id'];
//
//   let storeState;
//
//   beforeEach(() => {
//     const createDevice = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       device: {
//         list: [
//           createDevice('PRODUCT-AAA'),
//           createDevice('PRODUCT-BBB'),
//           createDevice('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });
//
//   describe('Device Selectors', () => {
//     it('getAllDevice() should return the list of Device', () => {
//       const results = deviceQuery.getAllDevice(storeState);
//       const selId = getDeviceId(results[1]);
//
//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });
//
//     it('getSelectedDevice() should return the selected Entity', () => {
//       const result = deviceQuery.getSelectedDevice(storeState);
//       const selId = getDeviceId(result);
//
//       expect(selId).toBe('PRODUCT-BBB');
//     });
//
//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = deviceQuery.getLoaded(storeState);
//
//       expect(result).toBe(true);
//     });
//
//     it("getError() should return the current 'error' storeState", () => {
//       const result = deviceQuery.getError(storeState);
//
//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
