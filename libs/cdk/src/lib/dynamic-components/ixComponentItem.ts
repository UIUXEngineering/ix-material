import { Type } from '@angular/core';

export class IxComponentItem {
  constructor(public component: Type<any>, public data: any) {}
}
