import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular-cli',
  template: `<a-link [href]="'https://github.com/angular/angular-cli'">@angular/cli</a-link>`,
  encapsulation: ViewEncapsulation.None,
})
export class AngularCliComponent {}
