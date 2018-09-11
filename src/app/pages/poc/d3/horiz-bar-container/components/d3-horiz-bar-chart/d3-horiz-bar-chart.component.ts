import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IxDynamicComponentService } from '@uiux/cdk/dynamic-components';
import { D3HorizBarChartRender } from './d3-horiz-bar-chart.render';


@Component({
             selector: 'd3-horiz-bar-chart',
             templateUrl: './d3-horiz-bar-chart.component.html',
             styleUrls: ['./d3-horiz-bar-chart.component.scss'],
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3HorizBarChartComponent {

  constructor(private el: ElementRef,
              private dynCmp: IxDynamicComponentService) {
  }

  updateChart(data: any[]): void {
    D3HorizBarChartRender.render(this.dynCmp.getShadowRoot(this.el), data);
  }

}
