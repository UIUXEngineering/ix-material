import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Injectable, NgZone } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { hasValueIn } from '@uiux/fn';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { BREAKPOINTS } from '../breakpoints/breakpoints';
import * as DeviceActions from './device.actions';
import { DeviceActionTypes } from './device.actions';
import { isCordova, isElectron, isIphoneNotch } from './device.detection';
import { DeviceFacade } from './device.facade';
import { DeviceState } from './device.interfaces';
import { DevicePartialState } from './device.reducer';

function _window(): any {
  // return the global native browser window object
  return window;
}

function navigator(): Navigator {
  return (<Window>_window()).navigator;
}

function userAgent(): string {
  return navigator().userAgent;
}

function _platformID(): string {
  return hasValueIn(_window(), 'cordova.platformId')
    ? _window().cordova.platformId
    : '';
}

function _model(): string {
  return hasValueIn(_window(), 'device.model') ? _window().device.model : '';
}

@Injectable({
  providedIn: 'root'
})
export class DeviceEffects implements OnInitEffects {
  resume: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);




  @Effect()
  detectDevices$ = this.actions$.pipe(
    ofType(DeviceActionTypes.DetectDevices),
    map((action: Action) => {
      // console.log(action);
      const payload: any = <DeviceState>{
        isLoaded: true,
        isActive: true,
        // isIphoneNotch: isIphoneNotch(_model()),
        isIphoneNotch: isIphoneNotch(_model()),
        isCordova: isCordova(_platformID()) && !isElectron(),
        // isCordova: _isMobile(),
        isElectron: isElectron(),
        isBrowser: !isElectron() && !isCordova(_platformID()),
        // isBrowser: _isBrowser(),
        isLandscape: this.mediaMatcher.matchMedia('(orientation: portrait)')
          .matches,
        isPortrait: this.mediaMatcher.matchMedia('(orientation: landscape)')
          .matches,
        isSmallScreen: this.mediaMatcher.matchMedia(BREAKPOINTS.SMALL).matches,
        cordova: _window().cordova,
        device: _window().device
      };

      if (payload.isElectron) {
        return DeviceActions.getDeviceCache(payload);
      } else {
        return DeviceActions.deviceLoaded(payload);
      }
    })
  );


  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DevicePartialState>,
    private deviceFacade: DeviceFacade,
    private zone: NgZone,
    private breakpointObserver: BreakpointObserver,
    private mediaMatcher: MediaMatcher,
  ) {
    if (isCordova(_platformID())) {
      fromEvent(document, 'resume').subscribe(event => {
        this.zone.run(() => {
          this.onResume();
        });
      });
    }

    this.breakpointObserver
      .observe(['(orientation: portrait)'])
      .subscribe(result => {
        const payload: any = <DeviceState>{
          isSmallScreen: this.mediaMatcher.matchMedia(BREAKPOINTS.SMALL).matches
        };

        if (result.breakpoints['(orientation: portrait)']) {
          this.deviceFacade.setPortrait(payload);
        } else {
          this.deviceFacade.setLandscape(payload);
        }
      });
  }

  public onResume(): void {
    this.resume.next(true);
  }

  public openLinkInBrowser(url: string) {
    // cordova plugin supporting SafariViewController has bugs
    _window().SafariViewController.isAvailable(function(available) {
      // if ( available ) {
      //   _window().SafariViewController.show({
      //     url: url,
      //     barColor: '#f7f7f9',
      //     tintColor: '#1ca8dd',
      //     controlTintColor: '#1ca8dd'
      //   });
      // } else {
      _window().cordova.InAppBrowser.open(url, '_blank');
      // }
    });
  }

  ngrxOnInitEffects(): Action {
    return { type: DeviceActionTypes.DetectDevices };
  }
}
