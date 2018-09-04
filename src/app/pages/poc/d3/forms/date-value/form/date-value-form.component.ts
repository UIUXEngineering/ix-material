import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DateValueFormModelService } from '../model/date-value-form-model.service';
import { DateValueForm } from '../model/interfaces';


@Component({
             selector: 'date-value-form',
             templateUrl: './date-value-form.component.html',
             styleUrls: ['./date-value-form.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class DateValueFormComponent implements OnInit, AfterViewInit, OnDestroy {

  private modelSub: Subscription = Subscription.EMPTY;

  formGroup: FormGroup;

  @Input() modelID = 'default';
  @Input() init: DateValueForm;
  @Output() onsubmit: EventEmitter<DateValueForm> = new EventEmitter();

  constructor(public model: DateValueFormModelService) {
  }

  ngOnInit() {
    this.formGroup = this.model.buildFormGroup();
    this.formGroup
      .valueChanges
      .subscribe((r: DateValueForm) => {
        // stub
        console.log(r);
      });
  }

  ngAfterViewInit(): void {
    if (this.init) {
      this.formGroup.setValue(this.init);
    }
  }

  onSubmitHandler(): void {
    // stub

    // submit directly to subject
    // this.model.value.next(this.addressForm.value);

    const payload: any = {
      date: this.formGroup.value.date.toString(),
      value: this.formGroup.value.value,
    };

    // or use method
    this.model.add(payload);
  }

  getErrorMessage(controlName: string) {
    const control: AbstractControl = this.getControl(controlName);

    // order of priority
    if (control.hasError('required')) {
      return 'You must enter a value';
    } else if (control.hasError('date')) {
      return `Date required`;
    } else if (control.hasError('email')) {
      return `Invalid email`;
    } else {

      // should never get to here
      return 'Invalid value';
    }
  }

  getControl(controlName: string): AbstractControl {
    return this.formGroup.controls[controlName];
  }

  reset(): void {
    this.formGroup.reset(<DateValueForm>this.model.getResetValue());
  }


  ngOnDestroy(): void {
    this.modelSub.unsubscribe();
  }
}
