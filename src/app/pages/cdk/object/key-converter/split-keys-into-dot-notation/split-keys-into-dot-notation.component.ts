import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../../configs/nav-items';
import { IDataItem } from '../../../../../../models/routes';

@Component({
             selector: 'split-keys-into-dot-notation',
             templateUrl: './split-keys-into-dot-notation.component.html',
             styleUrls: [ './split-keys-into-dot-notation.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SplitKeysIntoDotNotationComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.splitKeysIntoDotNotation;

  constructor() {
  }

  ngOnInit() {
  }

}
