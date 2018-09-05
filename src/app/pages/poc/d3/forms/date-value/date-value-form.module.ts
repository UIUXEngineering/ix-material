import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
              MatButtonModule,
              MatCheckboxModule,
              MatDatepickerModule,
              MatFormFieldModule,
              MatInputModule,
              MatMomentDateModule,
              MatPaginatorModule,
              MatSortModule,
              MatTableModule,
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
              MatButtonModule,
              MatCheckboxModule,
              MatDatepickerModule,
              MatFormFieldModule,
              MatInputModule,
              MatMomentDateModule,
              MatPaginatorModule,
              MatSortModule,
              MatTableModule,
            ],
          })
export class DateValueFormModule {
}
