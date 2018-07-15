import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddressForm, FormModelService } from './form-model.service';

@Component({
             selector: 'form-service-sample',
             templateUrl: './form-service-sample.component.html',
             styleUrls: ['./form-service-sample.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class FormServiceSampleComponent implements OnInit {
  addressForm: FormGroup;

  constructor(public model: FormModelService) {
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

}
