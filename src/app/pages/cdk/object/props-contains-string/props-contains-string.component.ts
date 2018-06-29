import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'props-contains-string',
             templateUrl: './props-contains-string.component.html',
             styleUrls: [ './props-contains-string.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PropsContainsStringComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propsContainsString;

  constructor() {
  }

  ngOnInit() {
  }

}
