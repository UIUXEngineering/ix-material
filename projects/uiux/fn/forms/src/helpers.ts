/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { IFormConfig, IFormValue, IValidationError, IFormGroupConfig } from './interfaces';
import { hasValue } from '@uiux/fn/value';
import { AbstractControl, Validators } from '@angular/forms';

export function buildConfig(_formConfig: IFormConfig): IFormConfig {
  if (!_formConfig) {
    throw new Error('must provide IFormConfig.');
  }

  if (!_formConfig._validators) {
    throw new Error('formConfig must have _validators property.');
  }

  if (!_formConfig._defaultValues) {
    throw new Error('formConfig must have _defaultValues property.');
  }

  if (!_formConfig._errorMessages) {
    throw new Error('formConfig must have _errorMessages property.');
  }

  const c: IFormConfig = {
    _validators: _formConfig._validators,
    _defaultValues: _formConfig._defaultValues,
    _errorMessages: _formConfig._errorMessages,
  };
  return c;
}

export function buildDefaultResponse(_c: IFormConfig): any {
  return Object.keys(_c._errorMessages).reduce((acc: any, controlKey: string) => {
    // form control
    acc[controlKey] = {};

    // validator
    if (hasValue(_c._errorMessages[controlKey])) {
      Object.keys(_c._errorMessages[controlKey]).map((validataorKey: string) => {
        acc[controlKey][validataorKey] = {
          hasError: false,
          message: _c._errorMessages[controlKey][validataorKey],
        };
      });
    } else {
      if (_c._errorMessages.hasOwnProperty(controlKey)) {
        acc[controlKey] = {
          hasError: false,
        };
      } else {
        throw new Error(controlKey + ' does not exist in Form Builder Config.');
      }
    }

    return acc;
  }, {});
}

export function buildFormGroupConfig(_c: IFormConfig): any {
  const config: IFormGroupConfig = {};
  const controlKeys: string[] = Object.keys(_c._defaultValues);

  controlKeys.forEach((_key: any) => {
    config[_key] = [_c._defaultValues[_key]];
    if (_c._validators[_key] && _c._validators[_key].length) {
      config[_key].push(Validators.compose(_c._validators[_key]));
    }
  });

  return config;
}

export function getErrorMessageByControlKey(
  errors: any,
  controlKey: string,
  errorMessages: any
): any {
  const validationErrors: any = {};
  const validatorKeys: string[] = Object.keys(errorMessages[controlKey]);
  validatorKeys.forEach((_validatorKey: string) => {
    validationErrors[_validatorKey] = {
      hasError: errors[_validatorKey] === true,
      message: errorMessages[controlKey][_validatorKey],
    };
  });
  return validationErrors;
}

export function getControlValidation(control: AbstractControl): IFormValue {
  return {
    dirty: control.dirty,
    pristine: control.pristine,
    touched: control.touched,
    valid: control.valid,
    invalid: control.invalid,
    value: control.value,
    errors: control.errors,
  };
}

export function buildControls(
  _controlKeys: string[],
  formControls: any
): { [key: string]: IFormValue } {
  const controls: { [key: string]: IFormValue } = {};
  _controlKeys.forEach((controlKey: string) => {
    controls[controlKey] = getControlValidation(formControls[controlKey]);
  });

  return controls;
}

export function buildResponseTree(
  _controlKeys: string[],
  _errorMessages: any,
  defaultValue: any,
  formControls: any
): any {
  return _controlKeys.reduce(
    (acc: any, controlKey: string) => {
      if (formControls[controlKey].errors !== null) {
        const error: IValidationError = getErrorMessageByControlKey(
          formControls[controlKey].errors,
          controlKey,
          _errorMessages
        );

        const controlValidation: IFormValue = getControlValidation(formControls[controlKey]);

        acc[controlKey] = Object.assign({}, error, controlValidation);
        acc[controlKey].hasError = true;
        acc[controlKey].errors = error;

        // root level
        if (!acc.hasError) {
          acc.hasError = true;
        }
      } else {
        const error: IValidationError = defaultValue[controlKey];
        const controlValidation: IFormValue = getControlValidation(formControls[controlKey]);
        acc[controlKey] = Object.assign({}, error, controlValidation);
        acc[controlKey].hasError = false;
        acc[controlKey].errors = error;
      }

      return acc;
    },
    {
      hasError: false,
    }
  );
}
