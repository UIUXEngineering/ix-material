import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/Observable/zip';
import { map } from 'rxjs/operators';
import { BehaviorValueSubject } from '../../../../../../../projects/uiux/cdk/rxjs';

export interface ReferenceLink {
  name: string;
  desc: string;
  link: string;
}

export interface ReferenceStore {
  rxjsSamples: ReferenceLink[];
  componentLibs: ReferenceLink[];
}

@Injectable({
              providedIn: 'root',
            })
export class ReferencesStoreService {

  value: BehaviorValueSubject<ReferenceStore> =
    new BehaviorValueSubject<ReferenceStore>(null);

  constructor(private http: HttpClient) {
    this.onInit();
  }

  onInit(): void {

    zip(this.getRxJSSamples(), this.getComponentLibs())
      .pipe(map((r: any[]) => {
        return this.zipObservables(r);
      }))
      .subscribe((r: any) => {
        this.value.next(r);
      });
  }

  zipObservables(r: any[]): any {
    return <ReferenceStore>{
      rxjsSamples: r[0],
      componentLibs: r[1],
    };
  }

  getRxJSSamples(): Observable<any> {
    return this.http.get('assets/data/rxjs-samples.json');
  }

  getComponentLibs(): Observable<any> {
    return this.http.get('assets/data/component-libs.json');
  }
}
