import { Component, ViewEncapsulation } from '@angular/core';
import { CDK } from '../../../../configs/constants';
import { ROUTES } from '../../../../configs/nav-items';

@Component({
  selector: 'link-has-value',
  template: `<a class="link-primary" [routerLink]="link">hasValue</a>`,
  encapsulation: ViewEncapsulation.None,
})
export class LinkHasValueComponent {
  link: string = ROUTES[CDK].object.hasValue.route;

  constructor() {}
}
