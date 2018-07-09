import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'find-property-data',
  templateUrl: './find-property-data.component.html',
  styleUrls: ['./find-property-data.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindPropertyDataComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.findPropertyData;
  constructor() {}

  ngOnInit() {}
}
