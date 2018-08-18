import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';
import { fadeAnimation } from '../../../../animations';

@Component({
  selector: 'app-has-value-in',
  templateUrl: './has-value-in.component.html',
  styleUrls: ['./has-value-in.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasValueInComponent implements OnInit {
  file = 'assets/examples/fn/hasValueIn.ts';
  data: IDataItem = ROUTES.fn.object.hasValueIn;

  constructor() {}

  ngOnInit() {}
}
