import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'app-cmp-overview',
  templateUrl: './cmp-overview.component.html',
  styleUrls: ['./cmp-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmpOverviewComponent {
  data: IDataItem = ROUTES.material.guide['mat-overview'];
}
