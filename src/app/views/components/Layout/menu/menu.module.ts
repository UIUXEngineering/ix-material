import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { MenuOverviewComponent } from './menu-overview/menu-overview.component';
import { MenuApiComponent } from './menu-api/menu-api.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MenuBasicExampleModule } from '../../../../../assets/examples/components/menu-example/menu-example.module';

@NgModule({
  imports: [CommonModule, SharedModule, MenuBasicExampleModule],
  declarations: [MenuOverviewComponent, MenuApiComponent, MenuExampleComponent],
  entryComponents: [MenuOverviewComponent, MenuApiComponent, MenuExampleComponent],
})
export class MenuModule {}
