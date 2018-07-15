import { AfterContentInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
             selector: 'poc-d3-bar-chart',
             templateUrl: './poc-d3-bar-chart.component.html',
             styleUrls: ['./poc-d3-bar-chart.component.scss'],
             preserveWhitespaces: false,

             // Note: Native
             encapsulation: ViewEncapsulation.ShadowDom,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PocD3BarChartComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    d3.select('.poc-bar-chart').style('color', 'red');
  }

}
