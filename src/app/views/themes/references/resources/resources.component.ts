import { Component } from '@angular/core';
import { ROUTES } from '../../../../../configs/nav-items';
import { IDataItem } from '../../../../../models/routes';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  data: IDataItem = ROUTES.themes.references.resources;
}
