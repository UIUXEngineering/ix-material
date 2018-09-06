import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateValueFormModule } from '../forms/date-value/date-value-form.module';
import { D3HorizBarChartComponent } from './d3-horiz-bar-chart/d3-horiz-bar-chart.component';
import { HorizBarContainerComponent } from './horiz-bar-container.component';

@NgModule({
            imports: [
              CommonModule,
              DateValueFormModule,
            ],
            declarations: [HorizBarContainerComponent, D3HorizBarChartComponent],
            exports: [D3HorizBarChartComponent, HorizBarContainerComponent],
          })
export class HorizBarModule {
}
