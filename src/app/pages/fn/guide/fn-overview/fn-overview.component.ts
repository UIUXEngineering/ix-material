import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { fadeAnimation } from '../../../../animations/app.animations';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'app-fn-overview',
  templateUrl: './fn-overview.component.html',
  styleUrls: ['./fn-overview.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FnOverviewComponent {
  data: IDataItem = ROUTES.fn.guides['fn-overview'];
}
