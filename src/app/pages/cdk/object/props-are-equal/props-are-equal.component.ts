import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'props-are-equal',
             templateUrl: './props-are-equal.component.html',
             styleUrls: [ './props-are-equal.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PropsAreEqualComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propsAreEqual;

  constructor() {
  }

  ngOnInit() {
  }

}
