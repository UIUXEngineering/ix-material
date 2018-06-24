import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'all-props-are-truthy-in',
             templateUrl: './all-props-are-truthy-in.component.html',
             styleUrls: [ './all-props-are-truthy-in.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class AllPropsAreTruthyInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsAreTruthyIn;
  constructor() {
  }

  ngOnInit() {
  }

}
