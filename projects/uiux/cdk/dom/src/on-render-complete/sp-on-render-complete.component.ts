import { AfterViewInit, Component, Input } from '@angular/core';
import { SpOnRenderCompleteService } from './sp-on-render-complete.service';

@Component({
  // tslint:disable-next-line
  selector: 'sp-on-render-complete',
  templateUrl: './sp-on-render-complete.component.html',
  styleUrls: ['./sp-on-render-complete.component.scss'],
})
export class SpOnRenderCompleteComponent implements AfterViewInit {
  @Input('containerCssClass') containerCssClass: string;

  constructor(private _onRenderComplete: SpOnRenderCompleteService) {}

  ngAfterViewInit(): void {
    if (this.containerCssClass) {
      this._onRenderComplete.complete(this.containerCssClass);
    }
  }
}
