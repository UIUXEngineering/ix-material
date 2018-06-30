import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'angular-material',
             templateUrl: './angular-material.component.html',
             styleUrls: [ './angular-material.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class AngularMaterialComponent implements OnInit {
  data: IDataItem = ROUTES.guides.install['angular-material'];
  constructor() {
  }

  ngOnInit() {
  }

}
