/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { FormGroup, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';
import { IFormService } from './interfaces';
import { FormBuilderFactoryService, FormService } from './form-builder-factory.service';

export interface IFormValidatorsConfig {
  [key: string]: ValidatorFn[];
}

export interface IFormErrorsConfig {
  [key: string]: any;
}

export interface IFormDefaultValueConfig {
  [key: string]: string | number;
}

/**
 * @deprecated
 */
export abstract class AbstractFormFactory implements IFormService {
  _validators: any;
  _errorMessages: any;
  _defaultValues: any;

  service: FormService;
  valueChanges: Subject<any>;
  form: FormGroup;
  defaultValue: any;

  get valid(): any {
    return this.form.valid;
  }

  constructor(private fp: FormBuilderFactoryService, private callback?: Function) {
    this._defaultValues = this.defaultValueConfig();
    this._errorMessages = this.errorsMessagesConfig();
    this._validators = this.validatorsConfig();
    this.service = this.fp.create(this);
    this.form = this.service.form;
    this.valueChanges = this.service.valueChanges;
    this.defaultValue = this.service.defaultValue;

    this.valueChanges.subscribe((r: any) => {
      if (this.onChange) {
        this.onChange(r);
      }

      if (this.callback) {
        this.callback(r);
      }
    });
  }

  abstract defaultValueConfig(): IFormDefaultValueConfig;

  abstract validatorsConfig(): IFormValidatorsConfig;

  abstract errorsMessagesConfig(): IFormErrorsConfig;

  abstract onChange(value: any): void;

  reset(value?: any): void {
    if (value) {
      this.form.reset(value);
    }
  }

  setValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }
}
