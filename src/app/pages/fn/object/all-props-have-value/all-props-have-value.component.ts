import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'all-props-have-value',
  templateUrl: './all-props-have-value.component.html',
  styleUrls: ['./all-props-have-value.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPropsHaveValueComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.allPropsHaveValue;
  constructor() {}

  ngOnInit() {}
}
