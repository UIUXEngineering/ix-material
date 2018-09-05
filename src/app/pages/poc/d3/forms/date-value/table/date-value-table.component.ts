import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { DateValueFormModelService } from '../model/date-value-form-model.service';
import { DateValueForm } from '../model/interfaces';
import * as moment from 'moment';

@Component({
             selector: 'date-value-table',
             templateUrl: './date-value-table.component.html',
             styleUrls: ['./date-value-table.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class DateValueTableComponent implements OnInit {

  private dataSub: Subscription = Subscription.EMPTY;

  displayedColumns: string[] = ['select', 'date', 'value'];
  dataSource = new MatTableDataSource<DateValueForm>([]);
  resultsLength = 0;

  selection = new SelectionModel<DateValueForm>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public model: DateValueFormModelService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSub = this.model.data
      .subscribe((r: DateValueForm[]) => {
        this.dataSource.data = r;
        this.resultsLength = r.length;
        this.cd.markForCheck();
      });
  }

  formatDate(utcMs: number): string {
    return moment(utcMs).local().format('MMMM Do YYYY');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deleteSelected(): void {
    console.log(this.selection);
  }

}
