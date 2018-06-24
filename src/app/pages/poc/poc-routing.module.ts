import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePocComponent } from './demos/sample-poc/sample-poc.component';
import { PocOverviewComponent } from './guide/poc-overview/poc-overview.component';
import { PocComponent } from './poc.component';

const routes: Routes = [
  {
    path: '',
    component: PocComponent,
    children: [
      {
        path: 'guides/poc-overview',
        component: PocOverviewComponent,
      },
      {
        path: 'demos/sample-poc',
        component: SamplePocComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingModule {}