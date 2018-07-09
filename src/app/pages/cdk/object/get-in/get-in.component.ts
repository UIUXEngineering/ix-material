import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.getIn;
  constructor() {}

  ngOnInit() {}
}
