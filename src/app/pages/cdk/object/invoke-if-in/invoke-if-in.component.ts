import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'invoke-if-in',
             templateUrl: './invoke-if-in.component.html',
             styleUrls: [ './invoke-if-in.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class InvokeIfInComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.invokeIfIn;

  constructor() {
  }

  ngOnInit() {
  }

}
