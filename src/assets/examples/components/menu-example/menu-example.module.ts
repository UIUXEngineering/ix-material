import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPMenuModule } from '@uiux/material';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MenuBasicExampleComponent } from './menu-example.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, SPMenuModule],
  declarations: [MenuBasicExampleComponent],
  exports: [MenuBasicExampleComponent],
})
export class MenuBasicExampleModule {}
