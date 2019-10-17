/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { IFormConfig, IFormGroupConfig, IFormService, IFormValue } from './interfaces';
import { Subject } from 'rxjs';
import { clone, interfaceTruthyIn } from '@uiux/fn';
import { buildConfig, buildControls, buildDefaultResponse, buildResponseTree, buildFormGroupConfig } from './helpers';

/**
 * @deprecated
 */
export class FormService {
  private _config: IFormConfig;
  private _formGroupConfig: IFormGroupConfig;
  private _controlKeys: string[] = [];
  private _errorMessages: any = {};
  private _defaultValue: any = {};

  form: FormGroup;
  initialValue: any;
  valueChanges: Subject<IFormValue>;
  config: any;

  get defaultValue(): any {
    return clone(this._defaultValue);
  }

  constructor(private _fb: FormBuilder, private _formConfig: IFormService, public actions: any) {
    this._config = buildConfig(this._formConfig);
    this._defaultValue = buildDefaultResponse(this._config);
    this._formGroupConfig = buildFormGroupConfig(this._config);
    this._errorMessages = this._config._errorMessages;

    this.form = this._fb.group(this._formGroupConfig);
    this.initialValue = JSON.parse(JSON.stringify(this.form.value));
    this._controlKeys = Object.keys(this.form.controls);
    this.valueChanges = new Subject();

    _formConfig.form = this.form;

    this.form.valueChanges.subscribe((data: any) => {
      return this.onValueChange(data);
    });

    this.onValueChange(null);
  }

  onValueChange(data?: any): void {
    if (!this.form) {
      return;
    }

    const controls: { [key: string]: IFormValue } = buildControls(this._controlKeys, this.form.controls);

    const errorTree = buildResponseTree(this._controlKeys, this._errorMessages, this.defaultValue, controls);

    if (!data) {
      data = clone(this._defaultValue);
    }

    // to iterate once
    const invalid: boolean = interfaceTruthyIn(this.form, 'controls', 'invalid');

    const root: IFormValue = {
      dirty: interfaceTruthyIn(this.form, 'controls', 'dirty'),
      pristine: interfaceTruthyIn(this.form, 'controls', 'pristine'),
      touched: interfaceTruthyIn(this.form, 'controls', 'touched'),
      valid: interfaceTruthyIn(this.form, 'controls', 'valid'),
      invalid: invalid,
      hasErrors: invalid,
      controls: controls,
      value: data,
      errors: errorTree,
    };

    const response: any = Object.assign({}, root, errorTree);

    this.valueChanges.next(response);

    if (this._formConfig.onChange) {
      this._formConfig.onChange(root);
    }

    if (this.actions && this.actions.formValueChanges) {
      this.actions.formValueChanges(root);
    }
  }

  getControlValidation(control: AbstractControl): IFormValue {
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

  reset(_config?: any): void {
    const config: any = _config ? _config : this._defaultValue;
    this.form.reset(config);
  }

  setValue(config: any): void {
    this.form.setValue(config);
  }
}

Injectable();
export class FormBuilderFactoryService {
  constructor(private _fb: FormBuilder) {
    /* noop */
  }

  create(config: IFormService, actions?: any): FormService {
    return new FormService(this._fb, config, actions);
  }
}

/**
 * @deprecated
 * @param parentDispatcher
 * @param fb
 */
export function _formBuilderFactory(
  parentDispatcher: FormBuilderFactoryService,
  fb: FormBuilder
): FormBuilderFactoryService {
  return parentDispatcher || new FormBuilderFactoryService(fb);
}

/**
 * @deprecated
 */
export const FORM_BUILDER_FACTORY_PROVIDER: any = {
  provide: FormBuilderFactoryService,
  deps: [[new Optional(), new SkipSelf(), FormBuilderFactoryService], FormBuilder],
  useFactory: _formBuilderFactory,
};
