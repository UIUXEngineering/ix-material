import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'clone',
             templateUrl: './clone.component.html',
             styleUrls: [ './clone.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class CloneComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.clone;

  constructor() {
  }

  ngOnInit() {
  }

}
