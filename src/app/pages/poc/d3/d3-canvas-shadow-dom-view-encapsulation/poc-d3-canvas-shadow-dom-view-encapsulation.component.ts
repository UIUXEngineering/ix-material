import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { getBars } from '../_data';
import { PoCShadowDomBarForm } from '../bar-form/poc-shadow-dom-bar-form.component';

@Component({
             selector: 'poc-d3-canvas-shadowdom-view-encapsulation',
             templateUrl: './poc-d3-canvas-shadow-dom-view-encapsulation.component.html',
             styleUrls: ['./poc-d3-canvas-shadow-dom-view-encapsulation.component.scss'],
             preserveWhitespaces: false,

             // Note: Testing Performance of Native Setting
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PocD3CanvasShadowDomViewEncapsulationComponent {

  data: any = getBars(1000);
  bars = 1000;

  // 200 px more than number of bars
  width = 1200;

  chartSample1 = 'https://bl.ocks.org/mbostock/946ddf8a32b3b660ffd8';
  chartSample2 = 'https://bl.ocks.org/mbostock/raw/946ddf8a32b3b660ffd8/';
  sourceCode = 'https://github.com/UIUXEngineering/ix-utilities/tree/master' +
    '/src/app/pages/poc/d3/d3-canvas-shadow-dom-view-encapsulation';

  onBarsSubmit(val: PoCShadowDomBarForm) {
    this.data = getBars(Number(val.bars));
    this.width = Number(val.bars) + 200;
  }
}