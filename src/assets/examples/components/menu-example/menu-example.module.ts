import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { IxMenuModule, IxShowModule } from '@uiux/material';
import { MenuBasicExampleComponent } from './menu-example.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, IxMenuModule, IxShowModule],
  declarations: [MenuBasicExampleComponent],
  exports: [MenuBasicExampleComponent],
})
export class MenuBasicExampleModule {}
