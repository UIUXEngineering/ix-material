import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_OPTIONS } from '@uiux/cdk/forms';

export interface AddressForm {
  firstName: string;
  lastName: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
}

@Component({
             selector: 'form-builder-sample',
             templateUrl: './form-builder-sample.component.html',
             styleUrls: ['./form-builder-sample.component.scss'],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class FormBuilderSampleComponent implements OnInit, AfterViewInit {
  formLabels: AddressForm = {
    firstName: 'First Name',
    lastName: 'Last Name',
    address: 'Address',
    address2: 'Address 2',
    city: 'City',
    state: 'State',
    postalCode: 'Postal Code',
    phone: 'Phone',
    email: 'Email',
  };

  addressForm: FormGroup;
  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;

  @Input() init: AddressForm;
  @Output() onsubmit: EventEmitter<AddressForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addressForm = this.buildFormGroup();
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
    // console.log(this.addressForm.value);
    this.onsubmit.next(this.addressForm.value);
  }

  buildFormGroup(): FormGroup {

    // Keep validators in array even if there is only one
    // validator for scalability
    const group: any = {
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required]],
      address2: '',
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.email]],
    };

    return this.fb.group(group);
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
    this.addressForm.reset(<AddressForm>{
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
      email: '',
    });
  }

}
