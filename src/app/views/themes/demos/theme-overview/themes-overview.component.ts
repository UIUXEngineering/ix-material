import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';
import { fadeAnimation } from '../../../../animations';

@Component({
  selector: 'theme-overview',
  templateUrl: './themes-overview.component.html',
  styleUrls: ['./themes-overview.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesOverviewComponent {
  swatches: any[] = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'A100',
    'A200',
    'A400',
    'A700',
  ];
  showContrast = false;
  isDisabled = false;
  clickCounter = 0;
  toggleDisable = false;

  data: IDataItem = ROUTES.themes.demos.overview;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.route-animation') classAnimation = true;
  @HostBinding('class.theme-overview') theme = true;
}
