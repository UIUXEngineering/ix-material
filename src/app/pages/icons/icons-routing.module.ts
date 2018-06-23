import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToPlatformComponent } from './custom/add-to-platform/add-to-platform.component';
import { InstallIconsComponent } from './custom/install-icons/install-icons.component';
import { SearchIconsComponent } from './custom/search-icons/search-icons.component';
import { IconsComponent } from './icons.component';

const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
    children: [
      {
        path: 'custom/search',
        component: SearchIconsComponent,
      },
      {
        path: 'custom/install-svg-icons',
        component: InstallIconsComponent,
      },
      {
        path: 'custom/add-to-platform',
        component: AddToPlatformComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsRoutingModule {}
