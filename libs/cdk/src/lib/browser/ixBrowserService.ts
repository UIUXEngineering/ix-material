import { Injectable } from '@angular/core';
import { supportsShadowDom } from './supportsShadowDom';

@Injectable({
  providedIn: 'root',
})
export class IxBrowserService {
  private _supportsShadowDom;

  get supportsShadowDom(): boolean {
    if (this._supportsShadowDom === undefined) {
      this._supportsShadowDom = supportsShadowDom();
    }
    return this._supportsShadowDom;
  }

  constructor() {}
}
