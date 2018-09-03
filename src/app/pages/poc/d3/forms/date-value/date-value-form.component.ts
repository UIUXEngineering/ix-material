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
import { FORM_OPTIONS } from '@uiux/cdk/forms';
import { Subscription } from 'rxjs';
import { AddressForm, DateValueFormModelService } from './model/date-value-form-model.service';


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

  addressForm: FormGroup;
  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;

  @Input() modelID = 'default';
  @Input() init: AddressForm;
  @Output() onsubmit: EventEmitter<AddressForm> = new EventEmitter();

  constructor(public model: DateValueFormModelService) {
  }

  ngOnInit() {
    this.addressForm = this.model.buildFormGroup();
    this.addressForm
      .valueChanges
      .subscribe((r: AddressForm) => {
        // stub
        // console.log(r);
      });
  }

  ngAfterViewInit(): void {
    if (this.init) {
      this.addressForm.setValue(this.init);
    }
  }

  onSubmitHandler(): void {
    // stub

    // submit directly to subject
    // this.model.value.next(this.addressForm.value);

    // or use method
    this.model.onSubmitHandler(this.addressForm.value);
  }

  getErrorMessage(controlName: string) {
    const control: AbstractControl = this.getControl(controlName);

    // order of priority
    if (control.hasError('required')) {
      return 'You must enter a value';
    } else if (control.hasError('maxlength')) {
      return `Number Characters exceed ${control.errors.maxlength.requiredLength}`;
    } else if (control.hasError('email')) {
      return `Invalid email`;
    } else {

      // should never get to here
      return 'Invalid value';
    }
  }

  getControl(controlName: string): AbstractControl {
    return this.addressForm.controls[controlName];
  }

  reset(): void {
    this.addressForm.reset(<AddressForm>this.model.getResetValue());
  }


  ngOnDestroy(): void {
    this.modelSub.unsubscribe();
  }
}
