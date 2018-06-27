import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'has-value-equal',
             templateUrl: './has-value-equal.component.html',
             styleUrls: [ './has-value-equal.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class HasValueEqualComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.value.hasValueEqual;
  constructor() {
  }

  ngOnInit() {
  }

}
