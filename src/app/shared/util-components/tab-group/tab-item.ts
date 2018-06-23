import { Type } from '@angular/core';

export class TabItem {
  constructor(
    public overviewComponent: Type<any>,
    public apiComponent: Type<any>,
    public exampleComponent: Type<any>
  ) {}
}
