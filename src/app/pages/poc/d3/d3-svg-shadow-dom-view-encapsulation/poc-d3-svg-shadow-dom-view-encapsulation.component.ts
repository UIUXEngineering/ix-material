import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { getBars } from './_data';
import { PoCShadowDomBarForm } from './bar-form/poc-shadow-dom-bar-form.component';

@Component({
             selector: 'poc-d3-svg-shadowdom-view-encapsulation',
             templateUrl: './poc-d3-svg-shadow-dom-view-encapsulation.component.html',
             styleUrls: ['./poc-d3-svg-shadow-dom-view-encapsulation.component.scss'],
             preserveWhitespaces: false,

             // Note: Testing Performance of Native Setting
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PocD3SvgShadowDomViewEncapsulationComponent {

  data: any = getBars(1000);
  bars = 1000;

  // 2000 px more than number of bars
  width = 1200;

  chartSample1 = 'https://bl.ocks.org/caravinden/d04238c4c9770020ff6867ee92c7dac1';
  chartSample2 = 'https://bl.ocks.org/caravinden/raw/d04238c4c9770020ff6867ee92c7dac1/';
  sourceCode = 'https://github.com/UIUXEngineering/ix-utilities/tree/master/src/' +
    'app/pages/poc/d3/d3-svg-shadow-dom-view-encapsulation';

  onBarsSubmit(val: PoCShadowDomBarForm) {
    this.data = getBars(Number(val.bars));
    this.width = Number(val.bars) + 200;
  }
}
