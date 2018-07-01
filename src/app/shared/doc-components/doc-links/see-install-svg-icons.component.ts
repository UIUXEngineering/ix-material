import { Component, ViewEncapsulation } from '@angular/core';
import { ICONS } from '../../../../configs/constants';
import { ROUTES } from '../../../../configs/nav-items';

@Component({
  // tslint:disable-next-line
  selector: 'see-install-svg-icons',
  template: `<a class="link-primary" [routerLink]="link">Install SVG Icons</a>`,
  encapsulation: ViewEncapsulation.None,
})
export class SeeInstallSvgIconsComponent {
  link: string = ROUTES[ICONS].custom['install-svg-icons'].route;

  constructor() {}
}
