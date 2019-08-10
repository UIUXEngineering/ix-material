import { Injectable } from '@angular/core';
import { TreeConfig } from '@spout/interfaces';
import { DeviceFacade } from '../+device/device.facade';
import { BehaviorSubject, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import {
  CordovaProjectWorkspace,
  CordovaWindow,
  SpoutAppCacheDictionary
} from './cordova.interfaces';
import { SpoutAppCache, initialCacheData } from './helpers/spout-app-cache';


function _window(): CordovaWindow {
  // return the global native browser window object
  return window as CordovaWindow;
}


@Injectable({
  providedIn: 'root'
})
export class SptCordovaFileService {

  cordovaFileSystem: SpoutAppCache;
  cacheData: SpoutAppCacheDictionary = initialCacheData;
  cacheData$: BehaviorSubject<SpoutAppCacheDictionary> = new BehaviorSubject(this.cacheData);

  constructor( private device: DeviceFacade ) {

    this.cordovaFileSystem = new SpoutAppCache(_window());

    this.device.isCordova$
      .pipe(
        mergeMap((isCordova: boolean) => {
          if (isCordova) {
            return this.cordovaFileSystem.getAppDataCacheJson();
          } else {
            return of(this.cacheData);
          }
        }),
      )
      .subscribe((cache: SpoutAppCacheDictionary) => {
        this.cacheData = cache;
      });

  }

  saveProject(project: TreeConfig) {
    if (project && project.uuid) {
      this.device.isCordovaSnapShot$
        .pipe(
          switchMap(() => {
            this.cacheData.projects[project.uuid] = <CordovaProjectWorkspace>{
              uuid: project.uuid,
              directory: project.uuid,
            };
            this.cacheData$.next(this.cacheData);
            return this.cordovaFileSystem.save(this.cacheData);
          })
        )
        .subscribe(() => {  })
    }
  }

}
