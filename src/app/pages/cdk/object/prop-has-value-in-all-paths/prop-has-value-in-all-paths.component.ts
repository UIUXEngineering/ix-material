import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
             selector: 'prop-has-value-in-all-paths',
             templateUrl: './prop-has-value-in-all-paths.component.html',
             styleUrls: [ './prop-has-value-in-all-paths.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PropHasValueInAllPathsComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.propHasValueInAllPaths;

  constructor() {
  }

  ngOnInit() {
  }

}
