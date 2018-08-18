import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'prop-truthy-in-all-paths',
  templateUrl: './prop-truthy-in-all-paths.component.html',
  styleUrls: ['./prop-truthy-in-all-paths.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropTruthyInAllPathsComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.propTruthyInAllPaths;

  constructor() {}

  ngOnInit() {}
}
