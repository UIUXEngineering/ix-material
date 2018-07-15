import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'native-view-encapsulation',
             templateUrl: './native-view-encapsulation.component.html',
             styleUrls: ['./native-view-encapsulation.component.scss'],
             preserveWhitespaces: false,

             // Note: Testing Performance of Native Setting
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class NativeViewEncapsulationComponent {


}
