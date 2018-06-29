import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'set-in-if-src-with-config',
             templateUrl: './set-in-if-src-with-config.component.html',
             styleUrls: [ './set-in-if-src-with-config.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SetInIfSrcWithConfigComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.setInIfSrcWithConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
