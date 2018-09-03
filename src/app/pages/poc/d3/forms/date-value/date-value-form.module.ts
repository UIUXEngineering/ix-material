import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DateValueFormComponent } from './date-value-form.component';
import { DateValueFormModelService } from './model/date-value-form-model.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    DateValueFormComponent
  ],
  providers: [
    DateValueFormModelService
  ],
  exports: [
    DateValueFormComponent
  ]
})
export class DateValueFormModule { }
