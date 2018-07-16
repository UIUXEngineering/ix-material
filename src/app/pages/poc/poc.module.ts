import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ShadowDomViewEncapsulationComponent } from './d3/shadow-dom-view-encapsulation/shadow-dom-view-encapsulation.component';
import { SamplePocComponent } from './demos/sample-poc/sample-poc.component';
import { PocOverviewComponent } from './guide/poc-overview/poc-overview.component';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { PocD3BarChartComponent } from './d3/shadow-dom-view-encapsulation/poc-d3-bar-chart/poc-d3-bar-chart.component';
import { PocShadowDomBarFormComponent } from './d3/shadow-dom-view-encapsulation/bar-form/poc-shadow-dom-bar-form.component';

@NgModule({
            imports: [CommonModule, SharedModule, PocRoutingModule],
            declarations: [
              PocComponent,
              PocOverviewComponent,
              SamplePocComponent,
              ShadowDomViewEncapsulationComponent,
              PocD3BarChartComponent,
              PocShadowDomBarFormComponent,
            ],
          })
export class PocModule {
}
