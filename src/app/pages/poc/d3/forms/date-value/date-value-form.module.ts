import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DateValueFormComponent } from './form/date-value-form.component';
import { DateValueFormModelService } from './model/date-value-form-model.service';
import { DateValueTableComponent } from './table/date-value-table.component';

@NgModule({
            imports: [
              CommonModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
              MatButtonModule,
              MatDatepickerModule,
              MatMomentDateModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule,
            ],
            declarations: [
              DateValueFormComponent,
              DateValueTableComponent,
            ],
            providers: [
              DateValueFormModelService,
            ],
            exports: [
              DateValueFormComponent,
              DateValueTableComponent,
              ReactiveFormsModule,
              // BrowserAnimationsModule,
              MatFormFieldModule,
              MatInputModule,
              MatButtonModule,
              MatDatepickerModule,
              MatMomentDateModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule,
            ],
          })
export class DateValueFormModule {
}
