import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';
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

  /**
   * User to reset form,
   * FormGroups have an issue resetting forms in that they only
   * reset the data, but not the state ( prisitine, untouched, etc ).
   */
  @ViewChild(FormGroupDirective, { static: true }) formRef: FormGroupDirective;

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
    // from @ViewChild
    this.formRef.resetForm();
  }

}
