import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { PocOverviewComponent } from './guide/poc-overview/poc-overview.component';
import { SamplePocComponent } from './demos/sample-poc/sample-poc.component';

@NgModule({
  imports: [CommonModule, SharedModule, PocRoutingModule],
  declarations: [PocComponent, PocOverviewComponent, SamplePocComponent],
})
export class PocModule {}
