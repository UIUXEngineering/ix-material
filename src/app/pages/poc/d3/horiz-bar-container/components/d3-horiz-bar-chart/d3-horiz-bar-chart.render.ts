import * as d3 from 'd3';
import { ScaleBand } from 'd3';
import { ScaleOrdinal } from 'd3-scale';
import { Selection } from 'd3-selection';
import { ixD3Margin, IxD3Margin } from '@uiux/d3/utils';

export class D3HorizBarChartRender {
  private _margin: IxD3Margin = ixD3Margin(20);
  setMargin(...margin) {
    this._margin = ixD3Margin(...margin);
  }
  get margin() {
    return this._margin;
  }

  render( el: HTMLElement | ShadowRoot, data: any[] ): void {
    data = data.map((d: any) => {
      d.date = d3.timeParse('%Y%m%d')(d.date);
      d.date = new Date(d.date); // x
      return d;
    });
    console.log(this.margin);
    console.log(el);
    console.log(data);
  }
}
