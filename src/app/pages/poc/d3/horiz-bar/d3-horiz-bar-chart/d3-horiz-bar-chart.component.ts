import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'd3-horiz-bar-chart',
             templateUrl: './d3-horiz-bar-chart.component.html',
             styleUrls: ['./d3-horiz-bar-chart.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3HorizBarChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
