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
import { FormBuilder, Validators } from '@angular/forms';

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
      email: [Validators.required, Validators.email],
      password: [Validators.required],
      verifyPassword: [Validators.required],
    };
  }

  errorsMessagesConfig(): IFormErrorsConfig {
    return {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
      },
      password: {
        required: 'Password is required.',
      },
      verifyPassword: {
        required: 'Password verifications is required.',
      },
    };
  }

  onChange(): void {
    /* noop */
  }
}

class CreateEmailPassworFormGroupWithAction extends AbstractFormFactory {
  // tslint:disable
  constructor(private formBuilderFactory: FormBuilderFactoryService, private action: Function) {
    super(formBuilderFactory, action);
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
      email: [Validators.required, Validators.email],
      password: [Validators.required],
      verifyPassword: [Validators.required],
    };
  }

  errorsMessagesConfig(): IFormErrorsConfig {
    return {
      email: {
        required: 'Email is required.',
        email: 'Invalid email.',
      },
      password: {
        required: 'Password is required.',
      },
      verifyPassword: {
        required: 'Password verifications is required.',
      },
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

  it('should create with action', () => {
    const emailForm: CreateEmailPassworFormGroupWithAction = new CreateEmailPassworFormGroupWithAction(
      new FormBuilderFactoryService(new FormBuilder()),
      () => {
        /* noop */
      }
    );

    expect(emailForm).toBeDefined();
    expect(emailForm.valueChanges).toBeDefined();
    expect(emailForm.onChange).toBeDefined();
    expect(emailForm.reset).toBeDefined();
    expect(emailForm.setValue).toBeDefined();
  });
});
