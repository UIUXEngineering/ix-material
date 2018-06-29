import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'set-in-if-src',
             templateUrl: './set-in-if-src.component.html',
             styleUrls: [ './set-in-if-src.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SetInIfSrcComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.setInIfSrc;
  constructor() {
  }

  ngOnInit() {
  }

}
