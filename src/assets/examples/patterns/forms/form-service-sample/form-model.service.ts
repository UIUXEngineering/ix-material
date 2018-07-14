import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_OPTIONS } from '@uiux/cdk/forms';
import { BehaviorValueSubject } from '@uiux/cdk/rxjs';

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

@Injectable({
              providedIn: 'root',
            })
export class FormModelService {

  value: BehaviorValueSubject<AddressForm> = new BehaviorValueSubject(null);
  appearance = FORM_OPTIONS.APPEARANCE.OUTLINE;
  floatLabel = FORM_OPTIONS.FLOAT_LABEL.ALWAYS;

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


  constructor(private fb: FormBuilder) {
  }

  onSubmitHandler(r: AddressForm): void {
    // stub
    console.log(r);
    this.value.next(r);
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

  getResetValue(): AddressForm {
    return {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
      email: '',
    };
  }
}
