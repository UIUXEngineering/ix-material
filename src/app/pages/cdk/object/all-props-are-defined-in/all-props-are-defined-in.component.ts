import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'all-props-are-defined-in',
  templateUrl: './all-props-are-defined-in.component.html',
  styleUrls: ['./all-props-are-defined-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPropsAreDefinedInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsAreDefinedIn;
  constructor() {}

  ngOnInit() {}
}
