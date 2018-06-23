import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IDataItem } from '../../../../../../models/routes';

@Component({
  selector: 'app-menu-api',
  templateUrl: './menu-api.component.html',
  styleUrls: ['./menu-api.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class MenuApiComponent implements OnInit {
  @Input('data') public data: IDataItem;

  ngOnInit() {}
}
