/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export interface IFormValue {
  dirty?: boolean;
  pristine?: boolean;
  touched?: boolean;
  valid?: boolean;
  invalid?: boolean;
  hasErrors?: boolean;
  controls?: any;
  value: any;
  errors: any;
}

export interface IFormService {
  _validators: any;
  _errorMessages: any;
  _defaultValues: any;
  form: FormGroup;
  valueChanges: Subject<any>;

  onChange(value: IFormValue): void;

  reset(): void;

  setValue(value: any): void;
}

export interface IValidationError {
  hasError: boolean;
  message: string;
}

export interface IFormConfig {
  _validators: any;
  _defaultValues: any;
  _errorMessages: any;
}

export interface IFormGroupConfig {
  [key: string]: any[];
}
