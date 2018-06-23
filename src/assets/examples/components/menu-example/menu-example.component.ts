import { Component } from '@angular/core';
import { SPMenuModel } from '@uiux/material';

@Component({
  selector: 'app-menu-basic-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.scss'],
})
export class MenuBasicExampleComponent {
  constructor(private _spMenuModel: SPMenuModel) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    /**
     * id provided by [ixMenuModelID]="'exampleMenu'"
     * in html
     */
    this._spMenuModel.getModelByID('exampleMenu').close();
  }
}
