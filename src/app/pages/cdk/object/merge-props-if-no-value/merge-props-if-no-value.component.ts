import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'merge-props-if-no-value',
             templateUrl: './merge-props-if-no-value.component.html',
             styleUrls: [ './merge-props-if-no-value.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class MergePropsIfNoValueComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.allPropsHaveValue;
  constructor() {
  }

  ngOnInit() {
  }

}
