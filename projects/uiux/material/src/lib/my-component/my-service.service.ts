import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MyDependentServiceService } from './my-dependent-service.service';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private depService: MyDependentServiceService) {}
}

/**
 * Creates an instance of MyServiceService if
 * one has not already been created.
 * @param parentDispatcher
 * @param depService injecting MyDependentServiceService
 * @docs-private
 */
export function _MY_SERVICE_FACTORY(
  parentDispatcher: MyServiceService,
  depService: MyDependentServiceService
): MyServiceService {
  return parentDispatcher || new MyServiceService(depService);
}

export const MY_SERVICE_PROVIDER = {
  provide: MyServiceService,
  deps: [[new Optional(), new SkipSelf(), MyServiceService], MyDependentServiceService],
  useFactory: _MY_SERVICE_FACTORY,
};
