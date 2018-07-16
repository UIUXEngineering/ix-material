import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { hasValueIn } from '@uiux/cdk/object';
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
export class PocD3BarChartComponent implements AfterContentInit, OnChanges {

  private chartSelector = '.poc-bar-chart';

  @Input('data') data: any;
  @Input('width') width: number;
  @Input('height') height: number;

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.removeExtraStyles();
    this.renderD3();
  }

  /**
   * Called when component loads and in ngOnChanges
   */
  renderD3(): void {
    this.dimensions();
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

  /**
   * For some reason all of Material's styles are included
   * in the ShadowDom. Remove all styles except what is included
   * in the stylesUrl meta-data.
   */
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

  ngOnChanges(val: SimpleChanges): void {
    // if no previous data, this is the first time
    // component is rendered. First render is handled
    // via ngAfterContentInit;
    if (hasValueIn(val, 'data.previousValue') && hasValueIn(val, 'width.previousValue')) {
      this.data = val.data.currentValue;
      this.width = val.width.currentValue;
      this.renderD3();
    }
  }

}