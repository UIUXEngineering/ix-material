import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'find-props-with-value',
  templateUrl: './find-props-with-value.component.html',
  styleUrls: ['./find-props-with-value.component.scss'],
    preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindPropsWithValueComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.findPropsWithValue;
  constructor() { }

  ngOnInit() {
  }

}
