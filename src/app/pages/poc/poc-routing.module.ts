import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShadowDomViewEncapsulationComponent } from './d3/shadow-dom-view-encapsulation/shadow-dom-view-encapsulation.component';
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
      {
        path: 'd3/shadowDomViewEncapsulation',
        component: ShadowDomViewEncapsulationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingModule {}
