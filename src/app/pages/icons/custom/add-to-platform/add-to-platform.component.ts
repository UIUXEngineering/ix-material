import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'add-to-platform',
  templateUrl: './add-to-platform.component.html',
  styleUrls: ['./add-to-platform.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToPlatformComponent {
  data: IDataItem = ROUTES.icons.custom['add-to-platform'];
}
