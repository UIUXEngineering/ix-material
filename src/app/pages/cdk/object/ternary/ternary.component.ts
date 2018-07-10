import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'ternary',
             templateUrl: './ternary.component.html',
             styleUrls: [ './ternary.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class TernaryComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.ternary;
  constructor() {
  }

  ngOnInit() {
  }

}
