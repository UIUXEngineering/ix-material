import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IxMenuModel } from '@uiux/material';

@Component({
  selector: 'app-menu-basic-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBasicExampleComponent {
  constructor(private _ixShowModel: IxMenuModel) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    /**
     * id provided by [ixMenuModelID]="'exampleMenu'"
     * in html
     */
    this._ixShowModel.getModelByID('exampleMenu').close();
  }
}
