import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'is-truthy-in',
  templateUrl: './is-truthy-in.component.html',
  styleUrls: ['./is-truthy-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsTruthyInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.isTruthyIn;

  constructor() {}

  ngOnInit() {}
}
