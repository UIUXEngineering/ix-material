import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_OPTIONS } from '@uiux/cdk/forms';
import { BehaviorSubject } from 'rxjs';
import { DateValueForm } from './interfaces';

@Injectable({
              providedIn: 'root',
            })
export class DateValueFormModelService {

  data: BehaviorSubject<DateValueForm[]> = new BehaviorSubject([]);

  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;

  formLabels: DateValueForm = {
    date: 'Date',
    value: 'Value',
  };

  constructor(private fb: FormBuilder) {
  }

  add(payload: DateValueForm): void {
    const data: DateValueForm[] = this.data.value;
    data.push(payload);
    this.data.next(data);
  }

  buildFormGroup(): FormGroup {

    // Keep validators in array even if there is only one
    // validator for scalability
    const group: any = {
      date: ['', [Validators.required]],
      value: ['', [Validators.required]],
    };

    return this.fb.group(group);
  }

  getResetValue(): DateValueForm {
    return {
      date: '',
      value: '',
    };
  }
}
