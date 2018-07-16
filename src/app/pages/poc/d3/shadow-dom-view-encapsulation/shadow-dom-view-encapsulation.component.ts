import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PocData } from './_data';

@Component({
             selector: 'native-view-encapsulation',
             templateUrl: './shadow-dom-view-encapsulation.component.html',
             styleUrls: ['./shadow-dom-view-encapsulation.component.scss'],
             preserveWhitespaces: false,

             // Note: Testing Performance of Native Setting
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class ShadowDomViewEncapsulationComponent {

  data: any = PocData;
}
