import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { fadeAnimation } from '../../../../animations/app.animations';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'app-cdk-overview',
  templateUrl: './cdk-overview.component.html',
  styleUrls: ['./cdk-overview.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkOverviewComponent {
  data: IDataItem = ROUTES.cdk.guide['cdk-overview'];
}
