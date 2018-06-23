import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AddToPlatformComponent } from './custom/add-to-platform/add-to-platform.component';
import { InstallIconsComponent } from './custom/install-icons/install-icons.component';
import { SearchIconsComponent } from './custom/search-icons/search-icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';

@NgModule({
  imports: [CommonModule, SharedModule, IconsRoutingModule],
  declarations: [
    IconsComponent,
    InstallIconsComponent,
    SearchIconsComponent,
    AddToPlatformComponent,
  ],
})
export class IconsModule {}
