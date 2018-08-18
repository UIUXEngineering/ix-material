/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  SP_SEARCH_AUTOCOMPLETE_FORMGROUP_PROVIDER,
  SpSearchAutoComplateFormGroup,
  SpSearchAutoComplateFormGroupFactory,
} from './search-autocomplete-form-group.service';
import { inject, TestBed } from '@angular/core/testing';
import {
  FORM_BUILDER_FACTORY_PROVIDER,
  IFormDefaultValueConfig,
  IFormErrorsConfig,
  IFormValidatorsConfig,
} from '@uiux/fn/forms';
import { FormBuilder } from '@angular/forms';

describe('SpSearchAutoComplateFormGroupFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        FORM_BUILDER_FACTORY_PROVIDER,
        SP_SEARCH_AUTOCOMPLETE_FORMGROUP_PROVIDER,
      ],
    });
  });

  it('should have onChange hook', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      const formGroup: SpSearchAutoComplateFormGroup = service.create();
      expect(formGroup.onChange).toBeDefined();
    }
  ));

  it('should return default error messages from errorsMessagesConfig', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      const formGroup: SpSearchAutoComplateFormGroup = service.create();
      const cfg: IFormErrorsConfig = formGroup.errorsMessagesConfig();
      expect(cfg.search.minlength).toBeDefined();
      expect(cfg.search.forbiddenWhitespace).toBeDefined();
    }
  ));

  it('should return search validators from validatorsConfig', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      const formGroup: SpSearchAutoComplateFormGroup = service.create();
      const cfg: IFormValidatorsConfig = formGroup.validatorsConfig();
      expect(cfg.search).toBeDefined();
    }
  ));

  it('should return search as defaultValueConfig', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      const formGroup: SpSearchAutoComplateFormGroup = service.create();
      const cfg: IFormDefaultValueConfig = formGroup.defaultValueConfig();
      expect(cfg.search).toBeDefined();
    }
  ));

  it('should create SpSearchAutoComplateFormGroup', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      const formGroup: SpSearchAutoComplateFormGroup = service.create();
      expect(formGroup.defaultValueConfig).toBeDefined();
      expect(formGroup.validatorsConfig).toBeDefined();
      expect(formGroup.errorsMessagesConfig).toBeDefined();
    }
  ));

  it('should be created', inject(
    [SpSearchAutoComplateFormGroupFactory],
    (service: SpSearchAutoComplateFormGroupFactory) => {
      expect(service).toBeTruthy();
    }
  ));
});
