import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'find-properties',
             templateUrl: './find-properties.component.html',
             styleUrls: [ './find-properties.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class FindPropertiesComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.findProperties;

  constructor() {
  }

  ngOnInit() {
  }

}
