import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  // tslint:disable-next-line
  selector: 'adding-to-fn',
  templateUrl: './adding-to-fn.component.html',
  styleUrls: ['./adding-to-fn.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddingToFnComponent {
  data: IDataItem = ROUTES.fn.guides['adding-to-fn'];

  seconaryEnpoints =
    'https://github.com/dherges/' + 'ng-packagr/blob/master/' + 'docs/secondary-entrypoints.md';

  starterImport = `import { myStarterFunction } from '@uiux/fn/starter`;
}
