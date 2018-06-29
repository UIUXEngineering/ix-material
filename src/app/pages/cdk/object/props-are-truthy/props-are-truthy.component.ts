import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'props-are-truthy',
             templateUrl: './props-are-truthy.component.html',
             styleUrls: [ './props-are-truthy.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PropsAreTruthyComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propsAreTruthy;

  constructor() {
  }

  ngOnInit() {
  }

}
