import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateValueFormComponent } from './date-value-form.component';
import { DateValueFormModelService } from './model/date-value-form-model.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
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
