import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'invoke-in',
  templateUrl: './invoke-in.component.html',
  styleUrls: ['./invoke-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvokeInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.invokeIn;

  constructor() {}

  ngOnInit() {}
}
