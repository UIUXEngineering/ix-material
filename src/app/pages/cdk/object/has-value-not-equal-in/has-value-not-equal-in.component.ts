import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'has-value-not-equal-in',
  templateUrl: './has-value-not-equal-in.component.html',
  styleUrls: ['./has-value-not-equal-in.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasValueNotEqualInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsHaveValue;

  constructor() {}

  ngOnInit() {}
}
