import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'all-props-have-value-in',
  templateUrl: './all-props-have-value-in.component.html',
  styleUrls: ['./all-props-have-value-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPropsHaveValueInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsHaveValueIn;
  constructor() {}

  ngOnInit() {}
}
