import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'is-defined-in',
  templateUrl: './is-defined-in.component.html',
  styleUrls: ['./is-defined-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsDefinedInComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.isDefinedIn;

  constructor() {}

  ngOnInit() {}
}
