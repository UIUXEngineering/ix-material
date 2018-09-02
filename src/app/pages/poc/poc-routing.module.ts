import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocD3CanvasShadowDomViewEncapsulationComponent } from './d3/d3-canvas-shadow-dom-view-encapsulation/poc-d3-canvas-shadow-dom-view-encapsulation.component';
import { PocD3SvgShadowDomViewEncapsulationComponent } from './d3/d3-svg-shadow-dom-view-encapsulation/poc-d3-svg-shadow-dom-view-encapsulation.component';
import { HorizBarContainerComponent } from './d3/horiz-bar/horiz-bar-container.component';
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
        path: 'd3/svgShadowDomViewEncapsulation',
        component: PocD3SvgShadowDomViewEncapsulationComponent,
      },
      {
        path: 'd3/horizBar',
        component: HorizBarContainerComponent,
      },
      {
        path: 'd3/canvasShadowDomViewEncapsulation',
        component: PocD3CanvasShadowDomViewEncapsulationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingModule {}
