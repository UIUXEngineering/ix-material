import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IDataItem } from '../../../../../../models/routes';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class MenuExampleComponent {
  @Input('data') public data: IDataItem;
}
