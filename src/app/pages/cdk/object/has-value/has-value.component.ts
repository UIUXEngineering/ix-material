import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';
import { fadeAnimation } from '../../../../animations';

@Component({
  selector: 'app-has-value',
  templateUrl: './has-value.component.html',
  styleUrls: ['./has-value.component.scss'],
  animations: [fadeAnimation],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HasValueComponent implements OnInit {
  file = 'assets/examples/cdk/hasValue.ts';
  displayedColumns = ['valueType', 'js', 'undefinedOrNull', 'empty', 'defined', 'nonEmpty'];
  dataSource: any[] = [
    {
      valueType: 'array',
      js: `[] or ['foo']`,
      undefined: 'false',
      defined: 'note 2',
      empty: 'false',
      nonEmpty: 'true',
    },
    {
      valueType: 'boolean',
      js: 'true or false',
      undefined: 'false',
      defined: 'true',
      empty: 'note 1',
      nonEmpty: 'note 1',
    },
    {
      valueType: 'number 0',
      js: '0',
      undefined: 'false',
      defined: 'true',
      empty: 'note 1',
      nonEmpty: 'note 1',
    },
    {
      valueType: 'number not 0',
      js: 'x < 0 && x > 0',
      undefined: 'false',
      defined: 'true',
      empty: 'note 1',
      nonEmpty: 'note 1',
    },
    {
      valueType: 'object',
      js: `{} or { prop: 'foo' }`,
      undefined: 'false',
      defined: 'note 3',
      empty: 'false',
      nonEmpty: 'true',
    },
    {
      valueType: 'string',
      js: `'' or 'foo'`,
      undefined: 'false',
      defined: 'note 4',
      empty: 'false',
      nonEmpty: 'true',
    },
  ];

  data: IDataItem = ROUTES.cdk.value.hasValue;

  constructor() {}

  ngOnInit() {}
}
