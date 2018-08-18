import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../../configs/nav-items';
import { IDataItem } from '../../../../../../models/routes';

@Component({
  selector: 'key-splitter-into-immutable-path',
  templateUrl: './key-splitter-into-immutable-path.component.html',
  styleUrls: ['./key-splitter-into-immutable-path.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeySplitterIntoImmutablePathComponent implements OnInit {
  data: IDataItem = ROUTES.fn.object.keySplitterIntoImmutablePath;

  constructor() {}

  ngOnInit() {}
}
