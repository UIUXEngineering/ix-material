/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

export interface IUseFactoryProvider {
  provide: any;
  useFactory: Function;
  deps: any[];
}
