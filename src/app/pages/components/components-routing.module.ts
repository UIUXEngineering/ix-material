import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabGroupComponent } from '../../shared/util-components/tab-group/tab-group.component';
import { ComponentsComponent } from './components.component';
import { AddingComponentsComponent } from './guide/adding-components/adding-components.component';
import { CmpOverviewComponent } from './guide/cmp-overview/cmp-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'guides/mat-overview',
        component: CmpOverviewComponent,
      },
      {
        path: 'guides/adding-components',
        component: AddingComponentsComponent,
      },
      {
        path: '**',
        component: TabGroupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
