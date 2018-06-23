import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'angular-io',
  template: `<a-link [href]="'https://angular.io/'">@angular</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class AngularIoComponent {}
