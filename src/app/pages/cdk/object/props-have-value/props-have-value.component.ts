import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'props-have-value',
             templateUrl: './props-have-value.component.html',
             styleUrls: [ './props-have-value.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PropsHaveValueComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propsHaveValue;

  constructor() {
  }

  ngOnInit() {
  }

}
