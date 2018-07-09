import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  // tslint:disable-next-line
  selector: 'adding-to-cdk',
  templateUrl: './adding-to-cdk.component.html',
  styleUrls: ['./adding-to-cdk.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddingToCdkComponent {
  data: IDataItem = ROUTES.cdk.guides['adding-to-cdk'];

  seconaryEnpoints =
    'https://github.com/dherges/' + 'ng-packagr/blob/master/' + 'docs/secondary-entrypoints.md';

  starterImport = `import { myStarterFunction } from '@uiux/cdk/starter`;
}
