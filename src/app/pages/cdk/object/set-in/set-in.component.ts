import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'set-in',
  templateUrl: './set-in.component.html',
  styleUrls: ['./set-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.setIn;

  constructor() {}

  ngOnInit() {}
}
