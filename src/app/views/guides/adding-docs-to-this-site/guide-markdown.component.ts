import { Component } from '@angular/core';
import { ROUTES } from '../../../../configs/nav-items';
import { IDataItem } from '../../../../models/routes';

@Component({
  selector: 'adding-docs-to-this-site',
  template: `<markdown-container [data]="data"></markdown-container>`,
})
export class GuideMarkdownComponent {
  // path to config in `src/configs/nav-items.ts`
  data: IDataItem = ROUTES.guides['adding-docs-to-this-site'].markdown;
}
