import { Component, ViewEncapsulation } from '@angular/core';
import { GUIDES } from '../../../../configs/constants';
import { ROUTES } from '../../../../configs/nav-items';

@Component({
  // tslint:disable-next-line
  selector: 'see-doc-components',
  template: `<a class="link-primary" [routerLink]="link">Doc Components</a>`,
  encapsulation: ViewEncapsulation.None,
})
export class SeeInstallIconsComponent {
  link: string = ROUTES[GUIDES]['adding-docs-to-this-site']['doc-components'].route;

  constructor() {}
}
