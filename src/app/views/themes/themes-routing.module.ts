import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesOverviewComponent } from './demos/theme-overview/themes-overview.component';
import { ResourcesComponent } from './references/resources/resources.component';
import { ThemesComponent } from './themes.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesComponent,
    children: [
      {
        path: 'demos/overview',
        component: ThemesOverviewComponent,
      },
      {
        path: 'references/resources',
        component: ResourcesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
