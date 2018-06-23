import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'poc-overview',
  templateUrl: './poc-overview.component.html',
  styleUrls: ['./poc-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PocOverviewComponent implements OnInit {
  data: IDataItem = ROUTES.poc.guides['poc-overview'];

  routeSnippet = `
  // in \`src/app/views/poc/poc-routing.module.ts\`

  {
    // end route matches route in \`src/configs/nav-items.ts\`
    path: 'demos/sample-poc',
    component: PocOverviewComponent,
  },`;

  platformImports = `
  import ( hasValue ) fron '@uiux/cdk/object';
  import ( MenuModule ) from '@uiux/material'
  `;

  constructor() {}

  ngOnInit() {}
}
