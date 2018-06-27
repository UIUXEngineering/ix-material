import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'is-scalar',
             templateUrl: './is-scalar.component.html',
             styleUrls: [ './is-scalar.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class IsScalarComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.value.isScalar;

  constructor() {
  }

  ngOnInit() {
  }

}
