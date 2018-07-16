import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { PocD3BarChartRender } from './poc-d3-bar-chart-render';

@Component({
             selector: 'poc-d3-bar-chart',
             templateUrl: './poc-d3-bar-chart.component.html',
             styleUrls: ['./poc-d3-bar-chart.component.scss'],
             preserveWhitespaces: false,

             // Note: ShadowDom
             encapsulation: ViewEncapsulation.ShadowDom,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PocD3BarChartComponent implements AfterContentInit {

  private chartSelector = '.poc-bar-chart';

  @Input('data') data: any;
  @Input('width') width: number;
  @Input('height') height: number;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.dimensions();
    this.removeExtraStyles();
    if (this.data) {
      PocD3BarChartRender.render(this.el.nativeElement.shadowRoot, this.data);
    }
  }

  dimensions(): void {
    const svg: any = this.el.nativeElement.shadowRoot.querySelector('svg') as HTMLElement;

    if (this.width) {
      svg.setAttribute('width', this.width);
    }

    if (this.height) {
      svg.setAttribute('height', this.height);
    }
  }

  removeExtraStyles(): void {
    const styles: HTMLElement[] = this.el.nativeElement.shadowRoot
      .querySelectorAll('style') as HTMLElement[];

    if (styles && styles.length) {
      styles.forEach((r: HTMLElement) => {
        if (r.innerText.indexOf(this.chartSelector) === -1) {
          this.el.nativeElement.shadowRoot.removeChild(r);
        }
      });
    }
  }

}
