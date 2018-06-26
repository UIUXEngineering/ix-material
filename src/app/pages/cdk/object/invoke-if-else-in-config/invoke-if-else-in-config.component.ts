import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'invoke-if-else-in-config',
             templateUrl: './invoke-if-else-in-config.component.html',
             styleUrls: [ './invoke-if-else-in-config.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class InvokeIfElseInConfigComponent implements OnInit {

  data: IDataItem = ROUTES.cdk.object.invokeIfElseInConfig;
  constructor() {
  }

  ngOnInit() {
  }

}