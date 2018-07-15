import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NativeViewEncapsulationComponent } from './d3/native-view-encapsulation/native-view-encapsulation.component';
import { SamplePocComponent } from './demos/sample-poc/sample-poc.component';
import { PocOverviewComponent } from './guide/poc-overview/poc-overview.component';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { PocD3BarChartComponent } from './d3/native-view-encapsulation/poc-d3-bar-chart/poc-d3-bar-chart.component';

@NgModule({
            imports: [CommonModule, SharedModule, PocRoutingModule],
            declarations: [
              PocComponent,
              PocOverviewComponent,
              SamplePocComponent,
              NativeViewEncapsulationComponent,
              PocD3BarChartComponent,
            ],
          })
export class PocModule {
}
