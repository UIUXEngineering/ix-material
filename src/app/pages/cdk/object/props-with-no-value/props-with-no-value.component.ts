import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'props-with-no-value',
  templateUrl: './props-with-no-value.component.html',
  styleUrls: ['./props-with-no-value.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropsWithNoValueComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propsWithNoValue;

  constructor() {}

  ngOnInit() {}
}
