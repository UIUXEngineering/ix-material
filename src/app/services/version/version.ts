import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VERSION } from '@angular/material';
import { BehaviorValueSubject } from '@uiux/cdk/rxjs';

@Injectable()
export class VersionService {
  value: BehaviorValueSubject<any> = new BehaviorValueSubject(null);

  constructor(private _http: HttpClient) {
    _http.get('assets/package.json').subscribe((r: any) => {
      this.value.next({
        version: r.version,
        ...r.dependencies,
      });
    });
  }
}

/** This material version will be used in footer and stackblitz. */
export const materialVersion = VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string;
  title: string;
}

/** Doc site versions. We update the urls and titles manually */
// TODO(tinayuangao): Update the title with actual versions
export const docVersions: VersionInfo[] = [
  {
    url: 'https://material.angular.io/',
    title: '5.2.4',
  },
  {
    url: `http://v5.material.angular.io`,
    title: '6.0.0-beta.4',
  },
];
