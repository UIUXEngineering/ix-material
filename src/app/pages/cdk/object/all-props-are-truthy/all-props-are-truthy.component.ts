import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'all-props-are-truthy',
  templateUrl: './all-props-are-truthy.component.html',
  styleUrls: ['./all-props-are-truthy.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPropsAreTruthyComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsAreTruthy;
  constructor() {}

  ngOnInit() {}
}
