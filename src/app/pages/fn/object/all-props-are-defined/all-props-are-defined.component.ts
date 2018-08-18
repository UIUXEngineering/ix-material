import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'all-props-are-defined',
  templateUrl: './all-props-are-defined.component.html',
  styleUrls: ['./all-props-are-defined.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPropsAreDefinedComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.allPropsAreDefined;
  constructor() {}

  ngOnInit() {}
}
