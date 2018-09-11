import * as d3 from 'd3';
import { ScaleBand } from 'd3';
import { ScaleOrdinal } from 'd3-scale';
import { Selection } from 'd3-selection';


export class D3HorizBarChartRender {
  static render( el: HTMLElement | ShadowRoot, data: any[] ): void {
    console.log(el);
    console.log(data);
  }
}
