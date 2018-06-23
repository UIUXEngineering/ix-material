import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-cdk',
  template: `<a-link [href]="'https://material.angular.io/cdk/categories'">@angular/cdk</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class AngularCdkComponent {}
