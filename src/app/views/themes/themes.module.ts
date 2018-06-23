import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesComponent } from './themes.component';
import { ThemesOverviewComponent } from './demos/theme-overview/themes-overview.component';
import { ResourcesComponent } from './references/resources/resources.component';

@NgModule({
  imports: [CommonModule, SharedModule, ThemesRoutingModule],
  declarations: [ThemesComponent, ThemesOverviewComponent, ResourcesComponent],
})
export class ThemesModule {}
