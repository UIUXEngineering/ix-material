import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-material',
  template: `<a-link [href]="'https://material.angular.io'">@angular/material</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class AngularMaterialComponent {}
