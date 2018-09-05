import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateValueForm } from './interfaces';

@Injectable({
              providedIn: 'root',
            })
export class DateValueFormModelService {

  data: BehaviorSubject<DateValueForm[]> = new BehaviorSubject([]);

  constructor() {
  }

  add(payload: DateValueForm): void {
    const data: DateValueForm[] = this.data.value;

    data.push(payload);

    data.sort((a: DateValueForm, b: DateValueForm) => {
      return a.date - b.date;
    });

    this.data.next(data);
  }

}
