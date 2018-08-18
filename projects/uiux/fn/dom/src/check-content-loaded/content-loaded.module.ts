import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';
import { CheckContentConfig, CheckContentLoaded } from './check-content-loaded';

@Injectable({
  providedIn: 'root',
})
export class ContentLoadedService {
  /**
   * Factory method to create CheckContentLoaded instance;
   * @param _document
   * @param _containerQuerySelector
   */
  static factory(
    _document: Document,
    _containerQuerySelector: string,
    _config?: CheckContentConfig
  ): CheckContentLoaded {
    return new CheckContentLoaded(_document, _containerQuerySelector, _config);
  }
}

export function _contentLoadedFactory(a: ContentLoadedService): ContentLoadedService {
  return a || new ContentLoadedService();
}

export const CONTENT_LOADED_PROVIDER: any = {
  provide: ContentLoadedService,
  deps: [[new Optional(), new SkipSelf(), ContentLoadedService]],
  useFactory: _contentLoadedFactory,
};

@NgModule({
  providers: [CONTENT_LOADED_PROVIDER],
})
export class ContentLoadedModule {
  static forRoot(): any {
    return {
      ngModule: ContentLoadedModule,
      providers: [],
    };
  }
}
