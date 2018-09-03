import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateValueFormComponent } from './form/date-value-form.component';
import { DateValueFormModelService } from './model/date-value-form-model.service';
import { DateValueTableComponent } from './table/date-value-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  declarations: [
    DateValueFormComponent,
    DateValueTableComponent,
  ],
  providers: [
    DateValueFormModelService
  ],
  exports: [
    DateValueFormComponent,
    DateValueTableComponent,
    MatFormFieldModule,
  ]
})
export class DateValueFormModule { }
