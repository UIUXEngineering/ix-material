import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'is-defined',
  templateUrl: './is-defined.component.html',
  styleUrls: ['./is-defined.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsDefinedComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.value.isDefined;
  constructor() {}

  ngOnInit() {}
}
