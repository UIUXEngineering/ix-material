import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'is-in',
  templateUrl: './is-in.component.html',
  styleUrls: ['./is-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.isIn;
  constructor() {}

  ngOnInit() {}
}
