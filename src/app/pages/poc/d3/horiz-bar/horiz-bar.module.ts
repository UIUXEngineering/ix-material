import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateValueFormModule } from '../forms/date-value/date-value-form.module';
import { HorizBarContainerComponent } from './horiz-bar-container.component';

@NgModule({
  imports: [
    CommonModule,
    DateValueFormModule,
  ],
  declarations: [HorizBarContainerComponent]
})
export class HorizBarModule { }
