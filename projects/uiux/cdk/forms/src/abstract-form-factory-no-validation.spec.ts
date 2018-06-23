/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {
  AbstractFormFactory,
  IFormDefaultValueConfig,
  IFormErrorsConfig,
  IFormValidatorsConfig,
} from './abstract-form-factory';
import { FormBuilderFactoryService } from './form-builder-factory.service';
import { FormBuilder } from '@angular/forms';

class CreateEmailPassworFormGroup extends AbstractFormFactory {
  // tslint:disable
  constructor(private formBuilderFactory: FormBuilderFactoryService) {
    super(formBuilderFactory);
  }
  // tslint:enable

  defaultValueConfig(): IFormDefaultValueConfig {
    return {
      email: '',
      password: '',
      verifyPassword: '',
    };
  }

  validatorsConfig(): IFormValidatorsConfig {
    return {
      email: [],
      password: [],
      verifyPassword: [],
    };
  }

  errorsMessagesConfig(): IFormErrorsConfig {
    return {
      email: null,
      password: null,
      verifyPassword: null,
    };
  }

  onChange(): void {
    /* noop */
  }
}

describe('abstract-forms-service.service', () => {
  it('should create class', () => {
    const emailForm: CreateEmailPassworFormGroup = new CreateEmailPassworFormGroup(
      new FormBuilderFactoryService(new FormBuilder())
    );

    expect(emailForm).toBeDefined();
    expect(emailForm.valueChanges).toBeDefined();
    expect(emailForm.onChange).toBeDefined();
    expect(emailForm.reset).toBeDefined();
    expect(emailForm.setValue).toBeDefined();
  });
});
