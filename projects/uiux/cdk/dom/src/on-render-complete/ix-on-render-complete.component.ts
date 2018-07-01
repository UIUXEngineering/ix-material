import { AfterViewInit, Component, Input } from '@angular/core';
import { IxOnRenderCompleteService } from './ix-on-render-complete.service';

@Component({
  // tslint:disable-next-line
  selector: 'ix-on-render-complete',
  templateUrl: './ix-on-render-complete.component.html',
  styleUrls: ['./ix-on-render-complete.component.scss'],
})
export class IxOnRenderCompleteComponent implements AfterViewInit {
  @Input('containerCssClass') containerCssClass: string;

  constructor(private _onRenderComplete: IxOnRenderCompleteService) {}

  ngAfterViewInit(): void {
    if (this.containerCssClass) {
      this._onRenderComplete.complete(this.containerCssClass);
    }
  }
}
