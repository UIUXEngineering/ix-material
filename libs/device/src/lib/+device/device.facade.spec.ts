// import { NgModule } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { readFirst } from '@nrwl/nx/testing';
//
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule, Store } from '@ngrx/store';
//
// import { NxModule } from '@nrwl/nx';
//
// import { DeviceEffects } from './device.effects';
// import { DeviceFacade } from './device.facade';
//
// import { deviceQuery } from './device.selectors';
// import { LoadDevice, DeviceLoaded } from './device.actions';
// import {
//   DeviceState,
//   Entity,
//   initialState,
//   deviceReducer
// } from './device.reducer';
//
// interface TestSchema {
//   device: DeviceState;
// }
//
// describe('DeviceFacade', () => {
//   let facade: DeviceFacade;
//   let store: Store<TestSchema>;
//   let createDevice;
//
//   beforeEach(() => {
//     createDevice = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });
//
//   describe('used in NgModule', () => {
//     beforeEach(() => {
//       @NgModule({
//         imports: [
//           StoreModule.forFeature('device', deviceReducer, { initialState }),
//           EffectsModule.forFeature([DeviceEffects])
//         ],
//         providers: [DeviceFacade]
//       })
//       class CustomFeatureModule {}
//
//       @NgModule({
//         imports: [
//           NxModule.forRoot(),
//           StoreModule.forRoot({}),
//           EffectsModule.forRoot([]),
//           CustomFeatureModule
//         ]
//       })
//       class RootModule {}
//       TestBed.configureTestingModule({ imports: [RootModule] });
//
//       store = TestBed.get(Store);
//       facade = TestBed.get(DeviceFacade);
//     });
//
//     /**
//      * The initially generated facade::loadAll() returns empty array
//      */
//     it('loadAll() should return empty list with loaded == true', async done => {
//       try {
//         let list = await readFirst(facade.allDevice$);
//         let isLoaded = await readFirst(facade.loaded$);
//
//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);
//
//         facade.loadAll();
//
//         list = await readFirst(facade.allDevice$);
//         isLoaded = await readFirst(facade.loaded$);
//
//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(true);
//
//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });
//
//     /**
//      * Use `DeviceLoaded` to manually submit list for state management
//      */
//     it('allDevice$ should return the loaded list; and loaded flag == true', async done => {
//       try {
//         let list = await readFirst(facade.allDevice$);
//         let isLoaded = await readFirst(facade.loaded$);
//
//         expect(list.length).toBe(0);
//         expect(isLoaded).toBe(false);
//
//         store.dispatch(
//           new DeviceLoaded([createDevice('AAA'), createDevice('BBB')])
//         );
//
//         list = await readFirst(facade.allDevice$);
//         isLoaded = await readFirst(facade.loaded$);
//
//         expect(list.length).toBe(2);
//         expect(isLoaded).toBe(true);
//
//         done();
//       } catch (err) {
//         done.fail(err);
//       }
//     });
//   });
// });
