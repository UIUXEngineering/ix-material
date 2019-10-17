import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hasValuePipe } from '@uiux/rxjs';
import { take } from 'rxjs/operators';
import { DevicePartialState } from './device.reducer';
import * as deviceQuery from './device.selectors';
import * as DeviceActions from './device.actions';

@Injectable({
  providedIn: 'root',
})
export class DeviceFacade {
  state$ = this.store.pipe(select(deviceQuery.getDeviceState));
  device$ = this.store.pipe(select(deviceQuery.getDevice));

  cordova$ = this.store.pipe(
    select(deviceQuery.getCordova),
    hasValuePipe()
  );

  isCordova$ = this.store.pipe(
    select(deviceQuery.isCordova),
    hasValuePipe()
  );

  isCordovaSnapShot$ = this.isCordova$.pipe(
    hasValuePipe(),
    take(1)
  );

  isCordovaOrElectronSnapShot$ = this.store.pipe(
    select(deviceQuery.isCordovaOrElectron),
    hasValuePipe(),
    take(1)
  );

  notCordova$ = this.store.pipe(select(deviceQuery.notCordova));

  isPortrait = this.store.pipe(select(deviceQuery.isPortrait));
  isCordovaPortrait$ = this.store.pipe(select(deviceQuery.isCordovaPortrait));

  isElectron$: Observable<boolean> = this.store.pipe(
    select(deviceQuery.isDesktop),
    hasValuePipe()
  );

  isElectronSnapShot$: Observable<boolean> = this.isElectron$.pipe(take(1));

  isBrowser$ = this.store.pipe(
    select(deviceQuery.isBrowser),
    hasValuePipe()
  );

  isBrowserSnapShot$ = this.isBrowser$.pipe(
    hasValuePipe(),
    take(1)
  );

  isBrowserOrElectron$ = this.store.pipe(select(deviceQuery.isBrowserOrElectron));
  isLandscape = this.store.pipe(select(deviceQuery.isLandscape));
  isSmallScreen$ = this.store.pipe(select(deviceQuery.isSmallScreen));

  isIphoneNotch$ = this.store.pipe(select(deviceQuery.isIphoneNotch));
  isIphoneNotchSmall$ = this.store.pipe(select(deviceQuery.isIphoneNotchSmall));
  isIphoneNotchLarge$ = this.store.pipe(select(deviceQuery.isIphoneNotchLarge));

  isIphoneNotchPortrait$ = this.store.pipe(select(deviceQuery.isIphoneNotchPortrait));
  isIphoneNotchLandscape$ = this.store.pipe(select(deviceQuery.isIphoneNotchLandscape));
  isSmallToolbar$ = this.store.pipe(select(deviceQuery.isSmallToolbar));
  isLargeToolbar$ = this.store.pipe(select(deviceQuery.isLargeToolbar));
  fixedTopGap$ = this.store.pipe(select(deviceQuery.fixedTopGap));

  constructor(private store: Store<DevicePartialState>) {
    this.isElectron$.subscribe((isElectron) => {
      console.log('IS ELECTRON', isElectron);
    });
    this.isCordova$.subscribe((isCordova) => {
      console.log('IS CORDOVA', isCordova);
    });
    this.isBrowser$.subscribe((isBrowser) => {
      console.log('IS BROWSER', isBrowser);
    });
  }

  setPortrait(payload: any) {
    this.store.dispatch(DeviceActions.isPortrait(payload));
  }

  setLandscape(payload: any) {
    this.store.dispatch(DeviceActions.isLandscape(payload));
  }
}
