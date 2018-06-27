import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../../configs/nav-items';
import { IDataItem } from '../../../../../../models/routes';

@Component({
             selector: 'is-array-syntax',
             templateUrl: './is-array-syntax.component.html',
             styleUrls: [ './is-array-syntax.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class IsArraySyntaxComponent implements OnInit {
  data: IDataItem = ROUTES.cdk.object.isArraySyntax;

  constructor() {
  }

  ngOnInit() {
  }

}
