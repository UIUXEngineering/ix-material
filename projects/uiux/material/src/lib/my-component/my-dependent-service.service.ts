import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDependentServiceService {
  constructor() {}
}

/**
 * This service will be injected into another service.
 * @docs-private */
export function _MY_DEPENDENT_SERVICE_FACTORY(
  parentDispatcher: MyDependentServiceService
): MyDependentServiceService {
  return parentDispatcher || new MyDependentServiceService();
}

export const MY_DEPENDENT_SERVICE_PROVIDER = {
  provide: MyDependentServiceService,
  deps: [[new Optional(), new SkipSelf(), MyDependentServiceService]],
  useFactory: _MY_DEPENDENT_SERVICE_FACTORY,
};
