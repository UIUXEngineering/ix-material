import { Component, ComponentRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IxCmpHostDirective, IxDynamicComponentService } from '@uiux/cdk/dynamic-components';
import { Subscription } from 'rxjs/Subscription';
import { DateValueFormModelService } from '../forms/date-value/model/date-value-form-model.service';
import { DateValueForm } from '../forms/date-value/model/interfaces';
import { D3HorizBarChartShadowDomComponent } from './components/d3-horiz-bar-chart/d3-horiz-bar-chart-shadowdom.component';
import { D3HorizBarChartComponent } from './components/d3-horiz-bar-chart/d3-horiz-bar-chart.component';

@Component({
             selector: 'horiz-bar-container',
             templateUrl: './horiz-bar-container.component.html',
             styleUrls: ['./horiz-bar-container.component.scss'],
           })
export class HorizBarContainerComponent implements OnInit, OnDestroy {

  private modelSub: Subscription = Subscription.EMPTY;
  private cmp: ComponentRef<any>;
  @ViewChild(IxCmpHostDirective) host: IxCmpHostDirective;

  constructor(private dynCmp: IxDynamicComponentService,
              private model: DateValueFormModelService) {
  }

  ngOnInit() {
    this.cmp = this.dynCmp.loadShadowDomComponent(this.host,
                                                  D3HorizBarChartShadowDomComponent,
                                                  D3HorizBarChartComponent);

    this.modelSub = this.model.data
      .subscribe((data: DateValueForm[]) => {
        (<any>this.cmp).updateChart(data);
      });

  }

  ngOnDestroy(): void {
    this.modelSub.unsubscribe();
  }

}
