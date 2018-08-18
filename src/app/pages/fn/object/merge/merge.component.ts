import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MergeComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.merge;

  constructor() {}

  ngOnInit() {}
}
