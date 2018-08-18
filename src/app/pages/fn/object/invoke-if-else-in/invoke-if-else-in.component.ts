import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'invoke-if-else-in',
  templateUrl: './invoke-if-else-in.component.html',
  styleUrls: ['./invoke-if-else-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvokeIfElseInComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.invokeIfElseIn;
  constructor() {}

  ngOnInit() {}
}
