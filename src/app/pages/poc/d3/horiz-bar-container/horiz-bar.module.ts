import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IxDynamicComponentsModule } from '@uiux/cdk/dynamic-components';
import { DateValueFormModule } from '../forms/date-value/date-value-form.module';
import { D3HorizBarChartShadowDomComponent } from './components/d3-horiz-bar-chart/d3-horiz-bar-chart-shadowdom.component';
import { D3HorizBarChartComponent } from './components/d3-horiz-bar-chart/d3-horiz-bar-chart.component';
import { HorizBarContainerComponent } from './horiz-bar-container.component';

@NgModule({
            imports: [
              CommonModule,
              DateValueFormModule,
              IxDynamicComponentsModule,
            ],
            providers: [
            ],
            declarations: [
              HorizBarContainerComponent,
              D3HorizBarChartComponent,
              D3HorizBarChartShadowDomComponent,
            ],
            exports: [
              D3HorizBarChartComponent,
              HorizBarContainerComponent,
              D3HorizBarChartShadowDomComponent,
            ],
            entryComponents: [
              D3HorizBarChartComponent,
              D3HorizBarChartShadowDomComponent,
            ],
          })
export class HorizBarModule {
}
