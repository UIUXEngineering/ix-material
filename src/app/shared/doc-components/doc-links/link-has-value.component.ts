import { Component, ViewEncapsulation } from '@angular/core';
import { FN } from '../../../../configs/constants';
import { ROUTES } from '../../../../configs/nav-items';

@Component({
  selector: 'link-has-value',
  template: `<a class="link-primary" [routerLink]="link">hasValue</a>`,
  encapsulation: ViewEncapsulation.None,
})
export class LinkHasValueComponent {
  link: string = ROUTES[FN].object.hasValue.route;

  constructor() {}
}
