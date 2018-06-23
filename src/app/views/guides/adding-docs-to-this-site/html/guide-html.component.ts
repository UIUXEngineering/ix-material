import { Component } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'adding-docs-to-this-site',
  templateUrl: './guide-html.component.html',
})
export class GuideHTMLComponent {
  // path to config in `src/configs/nav-items.ts`
  data: IDataItem = ROUTES.guides['adding-docs-to-this-site'].html;

  cmpSnippet = `
    @Component({
      selector: 'adding-docs-to-this-site',
      template: \`<guide-container [data]="data"></guide-container>\`
    })
    export class GuideHTMLComponent {

      // path to config in \`src/configs/nav-items.ts\`
      data: IDataItem = ROUTES.guides[ 'adding-docs-to-this-site' ].html;
    }`;

  routeSnippet = `
  // in \`src/app/views/guides/guides-routing.module.ts\`

  {
    // end route matches route in \`src/configs/nav-items.ts\`
    path: 'adding-docs-to-this-site/html',
    component: GuideHTMLComponent,
  },`;
}
