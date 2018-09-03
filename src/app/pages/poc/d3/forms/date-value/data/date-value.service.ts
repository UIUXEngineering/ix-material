import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateValueForm } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DateValueService {

  data: BehaviorSubject<DateValueForm[]> = new BehaviorSubject([]);

  constructor() { }


}
