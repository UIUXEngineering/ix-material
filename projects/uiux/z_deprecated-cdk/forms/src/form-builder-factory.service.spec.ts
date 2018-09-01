/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { FormService } from './form-builder-factory.service';
import { FormBuilder, Validators } from '@angular/forms';

describe('FormService', () => {
  let fs: FormService;
  let action: Function;

  beforeEach(() => {
    const config: any = {
      _validators: {
        email: [Validators.required, Validators.email],
        password: [Validators.required],
        verifyPassword: [Validators.required],
      },
      _defaultValues: {
        email: 'myEmail',
        password: 'myPassword',
        verifyPassword: 'myPassword',
      },
      _errorMessages: {
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
      },
    };

    action = () => {
      /* noop */
    };

    fs = new FormService(new FormBuilder(), config, action);
  });

  afterEach(() => {});

  it('should create', () => {
    expect(fs).toBeDefined();
  });
});
