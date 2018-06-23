import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { CmpOverviewComponent } from './guide/cmp-overview/cmp-overview.component';
import { MenuModule } from './Layout/menu/menu.module';
import { AddingComponentsComponent } from './guide/adding-components/adding-components.component';

@NgModule({
  imports: [CommonModule, SharedModule, MenuModule, ComponentsRoutingModule],
  declarations: [ComponentsComponent, CmpOverviewComponent, AddingComponentsComponent],
})
export class ComponentsModule {}
