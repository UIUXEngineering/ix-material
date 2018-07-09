import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent implements OnInit {
  data: IDataItem = ROUTES.guides.upgrade.angular;

  constructor() {}

  ngOnInit() {}
}
