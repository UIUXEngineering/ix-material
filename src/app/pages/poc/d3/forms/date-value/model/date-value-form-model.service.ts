import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateValueForm } from './interfaces';
import { removeAllBy } from '@uiux/fn/common';

@Injectable({
              providedIn: 'root',
            })
export class DateValueFormModelService {

  data: BehaviorSubject<DateValueForm[]> = new BehaviorSubject([]);

  constructor() {
  }

  add(payload: DateValueForm): void {
    let data: DateValueForm[] = this.data.value;

    data.push(payload);

    data = this.sortByDate(data);

    this.data.next(data);
  }

  remove(selected: DateValueForm[]): void {

    this.data.next(removeAllBy(this.data.value, selected, 'guid'));
  }

  sortByDate(data: DateValueForm[]): DateValueForm[] {
    return data.sort((a: DateValueForm, b: DateValueForm) => {
      return a.date - b.date;
    });
  }

}
