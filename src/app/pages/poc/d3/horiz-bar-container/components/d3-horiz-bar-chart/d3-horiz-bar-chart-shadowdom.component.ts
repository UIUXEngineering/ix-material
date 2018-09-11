import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { IxDynamicComponentService } from '@uiux/cdk/dynamic-components';
import { D3HorizBarChartRender } from './d3-horiz-bar-chart.render';

@Component({
             selector: 'd3-horiz-bar-chart-shadowdom',
             templateUrl: './d3-horiz-bar-chart.component.html',
             styleUrls: ['./d3-horiz-bar-chart.component.scss'],
             encapsulation: ViewEncapsulation.ShadowDom,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class D3HorizBarChartShadowDomComponent implements AfterContentInit {

  private d3Render: D3HorizBarChartRender = new D3HorizBarChartRender();

  constructor(private el: ElementRef,
              private dynCmp: IxDynamicComponentService) {
  }

  ngAfterContentInit(): void {
    this.dynCmp.removeExtraStyles(this.el, '.svg-d3-horiz-bar-chart');
  }

  updateChart(data: any[]): void {
    this.d3Render.render(this.dynCmp.getShadowRoot(this.el), data);
  }
}
