import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'has-value-not-equal',
  templateUrl: './has-value-not-equal.component.html',
  styleUrls: ['./has-value-not-equal.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasValueNotEqualComponent implements OnInit {
  data: IDataItem = ROUTES.fn.value.hasValueNotEqual;
  constructor() {}

  ngOnInit() {}
}
